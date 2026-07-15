import os
import django

# Set up Django environment
os.environ.setdefault('DJANGO_SETTINGS_MODULE', 'skillup_project.settings')
django.setup()

from django.contrib.admin.models import LogEntry
from tracker.models import (
    Skill, Milestone, StudyLog,
    Education, WorkExperience, Certification, ApplicantSkill,
    JobVacancy, JobSkillRequirement, TrainingProgram, TrainingEnrollment, Referral,
    GapScoreLog, JobBookmark, ApplicantDocument, Interview, Notification, CentralizedSkill
)

def reset_data(keep_lookups=True):
    print("Starting database cleanup...")

    # 1. Clear notifications, bookmarks, documents, gap logs, interviews
    print("Clearing notifications, bookmarks, documents, gap logs, and interviews...")
    Notification.objects.all().delete()
    JobBookmark.objects.all().delete()
    ApplicantDocument.objects.all().delete()
    GapScoreLog.objects.all().delete()
    Interview.objects.all().delete()

    # 2. Clear job vacancies, requirements, referrals
    print("Clearing referrals, job vacancy requirements, and job vacancies...")
    Referral.objects.all().delete()
    JobSkillRequirement.objects.all().delete()
    JobVacancy.objects.all().delete()

    # 3. Clear training enrollments (and optionally programs)
    print("Clearing training enrollments...")
    TrainingEnrollment.objects.all().delete()
    if not keep_lookups:
        print("Clearing lookup table: TrainingProgram...")
        TrainingProgram.objects.all().delete()

    # 4. Clear profile details (Education, WorkExperience, Certification, ApplicantSkill)
    print("Clearing profile details (Education, WorkExperience, Certification, ApplicantSkill)...")
    ApplicantSkill.objects.all().delete()
    Education.objects.all().delete()
    WorkExperience.objects.all().delete()
    Certification.objects.all().delete()
    if not keep_lookups:
        print("Clearing lookup table: CentralizedSkill...")
        CentralizedSkill.objects.all().delete()

    # 5. Clear tracker skills, milestones, study logs
    print("Clearing tracker skills, milestones, and study logs...")
    StudyLog.objects.all().delete()
    Milestone.objects.all().delete()
    Skill.objects.all().delete()

    # 6. Clear Django Admin logs
    print("Clearing Django admin log entries...")
    LogEntry.objects.all().delete()

    print("Re-seeding Apex, Prime & Nexus Employers and Applicant test accounts...")
    from tracker.views import (
        create_apex_employer_and_jobs, create_prime_employer_and_jobs,
        create_nexus_employer_and_jobs, create_healthcare_employer_and_jobs,
        create_ofw_employer_and_jobs, create_applicant_test_accounts
    )
    create_apex_employer_and_jobs()
    create_prime_employer_and_jobs()
    create_nexus_employer_and_jobs()
    create_healthcare_employer_and_jobs()
    create_ofw_employer_and_jobs()
    create_applicant_test_accounts()

    print("\nDatabase reset completed successfully!")
    print("All dynamic data has been removed. User accounts and Profiles remain intact, default employers, and 50 applicant test accounts are set up.")

if __name__ == '__main__':
    # You can set keep_lookups=False if you also want to delete CentralizedSkill (360 entries) and TrainingProgram (104 entries)
    reset_data(keep_lookups=True)
