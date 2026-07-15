import os
import django
os.environ.setdefault('DJANGO_SETTINGS_MODULE', 'skillup_project.settings')
django.setup()


from tracker.views import seed_mock_applicants_if_empty
from tracker.models import Profile, JobVacancy, Referral, ApplicantSkill, CentralizedSkill, TrainingProgram, Education, WorkExperience, Certification
from tracker.views import calculate_match_score, check_mismatch
from django.contrib.auth.models import User

# Seed data
seed_mock_applicants_if_empty()

# Check data
print('=== DATA CHECK ===')
print('Users:', User.objects.count())
print('Profiles:', Profile.objects.count())
applicants = Profile.objects.filter(role='applicant').count()
employers = Profile.objects.filter(role='employer').count()
admins = Profile.objects.filter(role='admin').count()
print('Applicants:', applicants)
print('Employers:', employers)
print('Admins:', admins)
print('CentralizedSkills:', CentralizedSkill.objects.count())
print('JobVacancies:', JobVacancy.objects.count())
print('ApplicantSkills:', ApplicantSkill.objects.count())
print('TrainingPrograms:', TrainingProgram.objects.count())
print('Referrals:', Referral.objects.count())
print('Educations:', Education.objects.count())
print('WorkExperiences:', WorkExperience.objects.count())
print('Certifications:', Certification.objects.count())

print()
print('=== APPLICANTS ===')
for p in Profile.objects.filter(role='applicant').select_related('user'):
    print('  ', p.user.first_name, p.user.last_name, '(', p.user.email, ') - Status:', p.status, '- Verified:', p.is_verified)

print()
print('=== JOB VACANCIES ===')
for v in JobVacancy.objects.all():
    req_count = v.requirements.count()
    print('  ', v.title, '(', v.location, ') -', req_count, 'skill requirements')

print()
print('=== MATCH SCORES for Daniel ===')
daniel = Profile.objects.filter(user__email='daniel.a@gmail.com').first()
if daniel:
    for vac in JobVacancy.objects.all():
        pct, gaps = calculate_match_score(daniel, vac)
        print('  Daniel vs', vac.title, ':', pct, '% match')

print()
print('=== REFERRALS ===')
for r in Referral.objects.select_related('applicant__user', 'job_vacancy'):
    print(' ', r.applicant.user.first_name, '->', r.job_vacancy.title, '[' + r.status + ']')

print()
print('=== ADMIN USER ===')
admin = User.objects.filter(username='admin@test.com').first()
if admin:
    print('admin@test.com exists, verified:', admin.profile.is_verified)
else:
    print('NO ADMIN USER! Creating one...')
    admin_user = User.objects.create_superuser(
        username='admin@test.com', email='admin@test.com', password='password123',
        first_name='PESO', last_name='Admin'
    )
    Profile.objects.update_or_create(user=admin_user, defaults={'role': 'admin', 'is_verified': True})
    print('admin@test.com created!')

print()
print('=== ALL DONE ===')
