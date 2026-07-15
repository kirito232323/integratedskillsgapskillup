from .models import JobVacancy, Profile, Notification
from .views import calculate_match_score

def unread_notifications(request):
    data = {
        'unread_match_alerts': 0,
        'unread_notifications_count': 0
    }
    if request.user.is_authenticated:
        try:
            profile = request.user.profile
            if profile.role == 'employer':
                vacancies = JobVacancy.objects.filter(employer=profile).exclude(status='Closed').prefetch_related('requirements__skill')
                applicants = Profile.objects.filter(role='applicant').select_related('user').prefetch_related(
                    'applicant_skills__skill',
                    'education',
                    'experience'
                )

                match_alerts_count = 0
                seen = set()
                for vac in vacancies:
                    for app in applicants:
                        key = (app.id, vac.id)
                        if key in seen:
                            continue
                        seen.add(key)
                        match_pct, _ = calculate_match_score(app, vac)
                        if match_pct >= 75:
                            match_alerts_count += 1
                data['unread_match_alerts'] = match_alerts_count
            elif profile.role == 'applicant':
                data['unread_notifications_count'] = Notification.objects.filter(user=request.user, is_read=False).count()
        except Exception:
            pass
    return data
