from django.contrib import messages
from .models import Notification

class NotificationMiddleware:
    def __init__(self, get_response):
        self.get_response = get_response

    def __call__(self, request):
        if request.user.is_authenticated:
            try:
                profile = request.user.profile
                if profile.role == 'applicant':
                    unreads = Notification.objects.filter(user=request.user, is_read=False)
                    for notif in unreads:
                        messages.info(request, notif.message)
                        notif.is_read = True
                        notif.save()
            except Exception:
                pass

        response = self.get_response(request)
        return response
