from django.db import models
from django.utils import timezone
from django.contrib.auth.models import User


class Skill(models.Model):
    PROFICIENCY_CHOICES = [
        ('beginner', 'Beginner'),
        ('intermediate', 'Intermediate'),
        ('advanced', 'Advanced'),
        ('expert', 'Expert'),
    ]

    STATUS_CHOICES = [
        ('not_started', 'Not Started'),
        ('in_progress', 'In Progress'),
        ('completed', 'Completed'),
    ]

    name = models.CharField(max_length=100)
    category = models.CharField(max_length=100, default='General')
    proficiency_level = models.CharField(max_length=20, choices=PROFICIENCY_CHOICES, default='beginner')
    status = models.CharField(max_length=20, choices=STATUS_CHOICES, default='not_started')
    description = models.TextField(blank=True, null=True)
    created_at = models.DateTimeField(auto_now_add=True)
    updated_at = models.DateTimeField(auto_now=True)

    def __str__(self):
        return self.name

    @property
    def total_study_hours(self):
        total_minutes = self.study_logs.aggregate(models.Sum('duration_minutes'))['duration_minutes__sum'] or 0
        return round(total_minutes / 60, 1)

    @property
    def completion_percentage(self):
        milestones_count = self.milestones.count()
        if milestones_count == 0:
            return 0
        completed_count = self.milestones.filter(is_completed=True).count()
        return int((completed_count / milestones_count) * 100)

class Milestone(models.Model):
    skill = models.ForeignKey(Skill, on_delete=models.CASCADE, related_name='milestones')
    title = models.CharField(max_length=200)
    description = models.TextField(blank=True, null=True)
    is_completed = models.BooleanField(default=False)
    target_date = models.DateField(blank=True, null=True)
    created_at = models.DateTimeField(auto_now_add=True)

    def __str__(self):
        return f"{self.title} ({self.skill.name})"

class StudyLog(models.Model):
    skill = models.ForeignKey(Skill, on_delete=models.CASCADE, related_name='study_logs')
    date = models.DateField(default=timezone.now)
    duration_minutes = models.PositiveIntegerField(help_text="Duration in minutes")
    notes = models.TextField(blank=True, null=True)
    created_at = models.DateTimeField(auto_now_add=True)

    class Meta:
        ordering = ['-date', '-created_at']

    def __str__(self):
        return f"{self.duration_minutes}m on {self.skill.name} ({self.date})"


class Profile(models.Model):
    ROLE_CHOICES = [
        ('admin', 'Admin'),
        ('applicant', 'Applicant'),
        ('employer', 'Employer'),
    ]

    user = models.OneToOneField(User, on_delete=models.CASCADE, related_name='profile')
    phone_number = models.CharField(max_length=20, blank=True, null=True)
    role = models.CharField(max_length=20, choices=ROLE_CHOICES, default='applicant')
    is_verified = models.BooleanField(default=False)
    verification_code = models.CharField(max_length=6, blank=True, null=True)
    
    # Candidate details for Talent Bench
    title = models.CharField(max_length=100, default='Software Engineer')
    status = models.CharField(max_length=50, default='Applied')
    skills = models.CharField(max_length=255, default='Python, SQL')
    skill_level = models.CharField(max_length=50, default='Intermediate')
    location = models.CharField(max_length=100, default='Remote')
    training_progress_title = models.CharField(max_length=100, default='General Training')
    training_progress_percentage = models.PositiveIntegerField(default=0)
    experience_years = models.CharField(max_length=50, default='2 Years')
    is_profile_complete = models.BooleanField(default=False)
    birthdate = models.DateField(blank=True, null=True)
    address = models.CharField(max_length=255, blank=True, null=True)
    civil_status = models.CharField(max_length=50, blank=True, null=True)
    soft_notes = models.TextField(blank=True, null=True)
    is_fresh_grad = models.BooleanField(default=False)
    account_status = models.CharField(max_length=20, default='Active')
    preferred_job = models.CharField(max_length=50, blank=True, null=True)
    profile_picture = models.FileField(upload_to='profile_pictures/', blank=True, null=True)

    @property
    def age(self):
        if self.birthdate:
            today = timezone.localdate()
            return today.year - self.birthdate.year - ((today.month, today.day) < (self.birthdate.month, self.birthdate.day))
        return None

    # Employer company details
    company_name = models.CharField(max_length=200, blank=True, null=True)
    industry = models.CharField(max_length=100, blank=True, null=True)
    company_size = models.CharField(max_length=50, blank=True, null=True)
    website = models.CharField(max_length=200, blank=True, null=True)
    company_logo = models.FileField(upload_to='company_logos/', blank=True, null=True)
    contact_name = models.CharField(max_length=200, blank=True, null=True)
    contact_position = models.CharField(max_length=100, blank=True, null=True)
    contact_email = models.CharField(max_length=100, blank=True, null=True)
    employment_type_offered = models.CharField(max_length=100, blank=True, null=True)

    def __str__(self):
        return f"{self.user.username} - {self.role}"


class CentralizedSkill(models.Model):
    name = models.CharField(max_length=100, unique=True)
    category = models.CharField(max_length=100, default='General')
    description = models.TextField(blank=True, null=True)

    def __str__(self):
        return self.name

class Education(models.Model):
    profile = models.ForeignKey(Profile, on_delete=models.CASCADE, related_name='education')
    institution = models.CharField(max_length=200)
    degree = models.CharField(max_length=200)
    field_of_study = models.CharField(max_length=200)
    start_year = models.PositiveIntegerField()
    end_year = models.PositiveIntegerField()

    def __str__(self):
        return f"{self.degree} at {self.institution}"

class WorkExperience(models.Model):
    profile = models.ForeignKey(Profile, on_delete=models.CASCADE, related_name='experience')
    company = models.CharField(max_length=200)
    position = models.CharField(max_length=200)
    description = models.TextField(blank=True, null=True)
    start_date = models.CharField(max_length=50)
    end_date = models.CharField(max_length=50, default='Present')
    is_current = models.BooleanField(default=False)

    def __str__(self):
        return f"{self.position} at {self.company}"

class Certification(models.Model):
    profile = models.ForeignKey(Profile, on_delete=models.CASCADE, related_name='certifications')
    name = models.CharField(max_length=200)
    issuing_organization = models.CharField(max_length=200)
    issue_date = models.DateField(blank=True, null=True)
    expiration_date = models.DateField(blank=True, null=True)
    is_tesda = models.BooleanField(default=False)

    def __str__(self):
        return f"{self.name} ({self.issuing_organization})"

class ApplicantSkill(models.Model):
    profile = models.ForeignKey(Profile, on_delete=models.CASCADE, related_name='applicant_skills')
    skill = models.ForeignKey(CentralizedSkill, on_delete=models.CASCADE)
    proficiency = models.PositiveIntegerField(default=1)
    source = models.CharField(max_length=20, default='self')
    last_updated = models.DateTimeField(auto_now=True)

    class Meta:
        unique_together = ('profile', 'skill')

    def __str__(self):
        return f"{self.profile.user.username} - {self.skill.name} ({self.proficiency}/5)"

class JobVacancy(models.Model):
    title = models.CharField(max_length=200)
    employer = models.ForeignKey(Profile, on_delete=models.CASCADE, related_name='vacancies')
    location = models.CharField(max_length=100, default='Remote')
    description = models.TextField(blank=True, null=True)
    remarks = models.TextField(blank=True, null=True)
    salary_range = models.CharField(max_length=100, blank=True, null=True)
    created_at = models.DateTimeField(auto_now_add=True)
    status = models.CharField(max_length=20, default='Open')
    category = models.CharField(max_length=50, default='jobs')
    min_education = models.CharField(max_length=100, blank=True, null=True)
    required_certifications = models.CharField(max_length=255, blank=True, null=True)
    required_experience_years = models.PositiveIntegerField(default=0)
    slots = models.PositiveIntegerField(default=3)
    remaining_slots = models.PositiveIntegerField(default=3)

    @property
    def category_display(self):
        category_map = {
            'IT': 'Information Technology',
            'BPO': 'BPO & Customer Service',
            'ADM': 'Administrative & Office',
            'FIN': 'Finance & Accounting',
            'MKT': 'Sales & Marketing',
            'RTL': 'Retail & Merchandising',
            'F&B': 'Food & Beverage / Hospitality',
            'MED': 'Healthcare & Medical',
            'EDU': 'Education & Training',
            'ENG': 'Engineering & Construction',
            'ELC': 'Electrical & Electronics',
            'MCH': 'Mechanical & Automotive',
            'TVT': 'TESDA Trade & Vocational',
            'LOG': 'Logistics & Warehousing',
            'SEC': 'Security & Safety',
            'GEN': 'General Services & Facilities',
            'DRV': 'Driving & Transportation',
            'MFG': 'Manufacturing & Garments',
            'AGR': 'Agriculture & Environment',
            'OFW': 'Overseas / OFW Positions',
        }
        return category_map.get(self.category, self.category)

    def __str__(self):
        return self.title

class JobSkillRequirement(models.Model):
    job_vacancy = models.ForeignKey(JobVacancy, on_delete=models.CASCADE, related_name='requirements')
    skill = models.ForeignKey(CentralizedSkill, on_delete=models.CASCADE)
    required_proficiency = models.PositiveIntegerField(default=1)

    class Meta:
        unique_together = ('job_vacancy', 'skill')

    def __str__(self):
        return f"{self.job_vacancy.title} - {self.skill.name} ({self.required_proficiency}/5)"

class TrainingProgram(models.Model):
    title = models.CharField(max_length=200)
    provider = models.CharField(max_length=200, default='TESDA')
    skill_addressed = models.ForeignKey(CentralizedSkill, on_delete=models.CASCADE)
    description = models.TextField(blank=True, null=True)
    duration = models.CharField(max_length=100, default='40 Hours')
    scheduled_date = models.DateField(blank=True, null=True)
    status = models.CharField(max_length=20, default='Scheduled') # Scheduled, In Progress, Completed

    def __str__(self):
        return self.title

class TrainingEnrollment(models.Model):
    STATUS_CHOICES = [
        ('Enrolled', 'Enrolled'),
        ('Attended', 'Attended & Completed'),
        ('No Show', 'No Show'),
    ]
    profile = models.ForeignKey(Profile, on_delete=models.CASCADE, related_name='training_enrollments')
    training_program = models.ForeignKey(TrainingProgram, on_delete=models.CASCADE, related_name='enrollments')
    enrolled_at = models.DateTimeField(auto_now_add=True)
    status = models.CharField(max_length=20, choices=STATUS_CHOICES, default='Enrolled')

    class Meta:
        unique_together = ('profile', 'training_program')

    def __str__(self):
        return f"{self.profile.user.username} enrolled in {self.training_program.title} ({self.status})"

class Referral(models.Model):
    STATUS_CHOICES = [
        ('Pending', 'Pending'),
        ('Interviewing', 'Interviewing'),
        ('Accepted — Awaiting Onboarding', 'Accepted — Awaiting Onboarding'),
        ('Confirmed — Onboarding', 'Confirmed — Onboarding'),
        ('Declined', 'Declined'),
        ('Hired — Probationary', 'Hired — Probationary'),
        ('Hired — Regular', 'Hired — Regular'),
        ('No Show', 'No Show'),
        ('Closed — No Show', 'Closed — No Show'),
        ('Still Employed — Performing Well', 'Still Employed — Performing Well'),
        ('Still Employed — On Improvement Plan', 'Still Employed — On Improvement Plan'),
        ('Resigned Voluntarily', 'Resigned Voluntarily'),
        ('Terminated by Employer', 'Terminated by Employer'),
        ('No Response from Employer', 'No Response from Employer'),
        ('No Response from Applicant', 'No Response from Applicant'),
        ('Regularly Employed', 'Regularly Employed'),
        ('Probation Extended', 'Probation Extended'),
        ('Separated — End of Probation', 'Separated — End of Probation'),
        ('Not Hired', 'Not Hired'),
        ('No Response', 'No Response'),
    ]
    applicant = models.ForeignKey(Profile, on_delete=models.CASCADE, related_name='referrals')
    job_vacancy = models.ForeignKey(JobVacancy, on_delete=models.CASCADE, related_name='referrals')
    date_referred = models.DateField(default=timezone.now)
    status = models.CharField(max_length=50, choices=STATUS_CHOICES, default='Pending')
    updated_at = models.DateTimeField(auto_now=True)
    contact_attempts = models.JSONField(default=list)
    rejection_reason = models.CharField(max_length=255, blank=True, null=True)

    # Stage 1: Onboarding Details
    accepted_position = models.CharField(max_length=200, blank=True, null=True)
    accepted_salary = models.CharField(max_length=100, blank=True, null=True)
    reporting_date = models.DateField(blank=True, null=True)
    work_location = models.CharField(max_length=255, blank=True, null=True)
    employment_type = models.CharField(max_length=100, blank=True, null=True) # Regular, Probationary, Project-Based, Contract, Part-Time
    probationary_period_months = models.PositiveIntegerField(default=6, blank=True, null=True)
    employer_remarks = models.TextField(blank=True, null=True)
    
    # Stage 2: Applicant Response
    decline_reason = models.CharField(max_length=100, blank=True, null=True)
    decline_remarks = models.TextField(blank=True, null=True)
    
    # Stage 2: Pre-employment Checklist Uploads
    nbi_clearance = models.FileField(upload_to='pre_employment/', blank=True, null=True)
    medical_certificate = models.FileField(upload_to='pre_employment/', blank=True, null=True)
    sss_number = models.CharField(max_length=50, blank=True, null=True)
    philhealth_number = models.CharField(max_length=50, blank=True, null=True)
    pagibig_number = models.CharField(max_length=50, blank=True, null=True)
    bir_tin = models.CharField(max_length=50, blank=True, null=True)
    birth_certificate = models.FileField(upload_to='pre_employment/', blank=True, null=True)
    diploma_transcript = models.FileField(upload_to='pre_employment/', blank=True, null=True)
    prev_employment_cert = models.FileField(upload_to='pre_employment/', blank=True, null=True)
    tesda_cert = models.FileField(upload_to='pre_employment/', blank=True, null=True)
    
    # Stage 3: PESO Coordinator
    pre_employment_status = models.CharField(max_length=20, default='Incomplete')
    coordination_notes = models.TextField(blank=True, null=True)
    
    # Stage 4: Physical Report
    reported_for_work = models.CharField(max_length=20, default='Awaiting')
    actual_start_date = models.DateField(blank=True, null=True)
    
    # Stage 5: Mid-Probation Monitoring
    mid_probation_outcome = models.CharField(max_length=100, blank=True, null=True)
    mid_probation_notes = models.TextField(blank=True, null=True)
    mid_probation_checked_at = models.DateTimeField(blank=True, null=True)
    
    # Stage 6: Probation Completion
    probation_extension_end_date = models.DateField(blank=True, null=True)
    separation_reason = models.CharField(max_length=100, blank=True, null=True)
    
    # Stage 7: Evaluation Feedback
    # Employer eval of candidate
    eval_emp_quality = models.PositiveIntegerField(blank=True, null=True)
    eval_emp_skills_accurate = models.CharField(max_length=10, blank=True, null=True)
    eval_emp_certs_genuine = models.CharField(max_length=10, blank=True, null=True)
    eval_emp_future_referrals = models.CharField(max_length=10, blank=True, null=True)
    eval_emp_satisfaction = models.PositiveIntegerField(blank=True, null=True)
    eval_emp_notes = models.TextField(blank=True, null=True)
    
    # Applicant eval of job match
    eval_app_accurate_desc = models.CharField(max_length=10, blank=True, null=True)
    eval_app_terms_met = models.CharField(max_length=10, blank=True, null=True)
    eval_app_expectations = models.TextField(blank=True, null=True)
    eval_app_future_use = models.CharField(max_length=10, blank=True, null=True)
    eval_app_satisfaction = models.PositiveIntegerField(blank=True, null=True)

    def __str__(self):
        return f"{self.applicant.user.username} referred to {self.job_vacancy.title}"

    def save(self, *args, **kwargs):
        is_new = self.pk is None
        old_status = None
        old_attempts_count = 0
        if not is_new:
            try:
                db_values = Referral.objects.filter(pk=self.pk).values('status', 'contact_attempts').first()
                if db_values:
                    old_status = db_values.get('status')
                    old_attempts = db_values.get('contact_attempts') or []
                    if isinstance(old_attempts, list):
                        old_attempts_count = len(old_attempts)
            except Exception:
                pass
        
        super().save(*args, **kwargs)
        
        current_attempts = self.contact_attempts or []
        current_attempts_count = 0
        if isinstance(current_attempts, list):
            current_attempts_count = len(current_attempts)
            
        if is_new or (old_status is not None and old_status != self.status) or (current_attempts_count > old_attempts_count):
            try:
                from .models import Notification
                if is_new:
                    msg = f"Your application for '{self.job_vacancy.title}' has been submitted successfully."
                elif old_status != self.status:
                    msg = f"Your application status for '{self.job_vacancy.title}' has been updated to '{self.status}'."
                else:
                    msg = f"A new update/contact attempt has been logged for your application to '{self.job_vacancy.title}'."
                
                from django.utils import timezone
                import datetime
                recent_time = timezone.now() - datetime.timedelta(seconds=5)
                already_exists = Notification.objects.filter(
                    user=self.applicant.user,
                    message=msg,
                    created_at__gte=recent_time
                ).exists()
                
                if not already_exists:
                    Notification.objects.create(
                        user=self.applicant.user,
                        message=msg,
                        notif_type='general'
                    )
            except Exception:
                pass

class Notification(models.Model):
    NOTIF_TYPE_CHOICES = [
        ('general', 'General'),
        ('match_alert', 'Match Alert'),
        ('offer_sent', 'Offer Sent'),
        ('offer_response', 'Offer Response'),
    ]
    user = models.ForeignKey(User, on_delete=models.CASCADE, related_name='notifications')
    message = models.TextField()
    is_read = models.BooleanField(default=False)
    created_at = models.DateTimeField(auto_now_add=True)
    notif_type = models.CharField(max_length=30, choices=NOTIF_TYPE_CHOICES, default='general')
    # Optional FKs for rich notifications (match alerts, offers)
    applicant_profile = models.ForeignKey('Profile', on_delete=models.SET_NULL, null=True, blank=True, related_name='received_notifications')
    vacancy = models.ForeignKey('JobVacancy', on_delete=models.SET_NULL, null=True, blank=True, related_name='notifications')

    def __str__(self):
        return f"Notification for {self.user.username}: {self.message[:30]}..."


class GapScoreLog(models.Model):
    profile = models.ForeignKey(Profile, on_delete=models.CASCADE, related_name='gap_logs')
    job_vacancy = models.ForeignKey(JobVacancy, on_delete=models.CASCADE, related_name='gap_logs')
    match_percentage = models.FloatField()
    gap_data = models.JSONField(default=list)
    logged_at = models.DateTimeField(auto_now_add=True)

    def __str__(self):
        return f"{self.profile.user.username} matching {self.job_vacancy.title} ({self.match_percentage}%)"


class JobBookmark(models.Model):
    profile = models.ForeignKey(Profile, on_delete=models.CASCADE, related_name='bookmarked_jobs')
    job_vacancy = models.ForeignKey(JobVacancy, on_delete=models.CASCADE, related_name='bookmarks')
    created_at = models.DateTimeField(auto_now_add=True)

    class Meta:
        unique_together = ('profile', 'job_vacancy')

    def __str__(self):
        return f"{self.profile.user.username} bookmarked {self.job_vacancy.title}"


class ApplicantDocument(models.Model):
    profile = models.ForeignKey(Profile, on_delete=models.CASCADE, related_name='documents')
    file = models.FileField(upload_to='applicant_documents/')
    file_name = models.CharField(max_length=255)
    file_size = models.CharField(max_length=50)
    uploaded_at = models.DateTimeField(auto_now_add=True)

    def __str__(self):
        return f"{self.profile.user.username} - {self.file_name}"


class Interview(models.Model):
    employer = models.ForeignKey(Profile, on_delete=models.CASCADE, related_name='scheduled_interviews')
    title = models.CharField(max_length=200, blank=True, null=True)
    candidate = models.ForeignKey(Profile, on_delete=models.SET_NULL, blank=True, null=True, related_name='interviews')
    vacancy = models.ForeignKey(JobVacancy, on_delete=models.SET_NULL, blank=True, null=True)
    date = models.DateField(default=timezone.now)
    start_time = models.TimeField()
    interview_type = models.CharField(max_length=50, default='Video Call')  # Video Call, Phone Call, In-Person
    round_name = models.CharField(max_length=100, default='Screening')  # Screening, Technical Interview, Final Round, Hiring Sync
    meeting_link = models.URLField(blank=True, null=True)
    notes = models.TextField(blank=True, null=True)
    created_at = models.DateTimeField(auto_now_add=True)

    class Meta:
        ordering = ['date', 'start_time']

    def __str__(self):
        if self.candidate:
            return f"Interview with {self.candidate.user.get_full_name()} for {self.vacancy.title if self.vacancy else 'Job'}"
        return self.title or f"Meeting on {self.date}"

    @property
    def is_past(self):
        import datetime
        from django.utils import timezone
        now = timezone.localtime()
        # combine date and time
        interview_datetime = timezone.make_aware(datetime.datetime.combine(self.date, self.start_time))
        return interview_datetime < now






