import os
import json
import urllib.request
import urllib.error
from django.conf import settings
from django.core.mail import send_mail

def send_notification_email(subject, message, recipient_list):
    """
    Sends an email using HTTPS API (Resend / Brevo) if configured,
    or falls back to Django standard SMTP.
    Works seamlessly on Render Free Tier (where SMTP ports are blocked).
    """
    resend_api_key = os.environ.get('RESEND_API_KEY')
    brevo_api_key = os.environ.get('BREVO_API_KEY')
    
    # 1. Try Resend HTTPS API (Port 443 - 100% compatible with Render free tier)
    if resend_api_key:
        try:
            url = "https://api.resend.com/emails"
            payload = {
                "from": "SKILLUP <onboarding@resend.dev>",
                "to": recipient_list,
                "subject": subject,
                "text": message
            }
            data = json.dumps(payload).encode('utf-8')
            req = urllib.request.Request(
                url,
                data=data,
                headers={
                    "Authorization": f"Bearer {resend_api_key}",
                    "Content-Type": "application/json",
                    "User-Agent": "SkillupApp/1.0"
                }
            )
            with urllib.request.urlopen(req, timeout=5) as response:
                if response.status in (200, 201):
                    print("Resend API email sent successfully to", recipient_list)
                    return True
        except Exception as e:
            print("Resend API Email error:", e)

    # 2. Try Brevo HTTPS API (Port 443)
    if brevo_api_key:
        try:
            url = "https://api.brevo.com/v3/smtp/email"
            payload = {
                "sender": {"name": "SKILLUP", "email": getattr(settings, 'DEFAULT_FROM_EMAIL', 'integratedskillsgapskillup@gmail.com')},
                "to": [{"email": r} for r in recipient_list],
                "subject": subject,
                "textContent": message
            }
            data = json.dumps(payload).encode('utf-8')
            req = urllib.request.Request(
                url,
                data=data,
                headers={
                    "api-key": brevo_api_key,
                    "Content-Type": "application/json",
                    "User-Agent": "SkillupApp/1.0"
                }
            )
            with urllib.request.urlopen(req, timeout=5) as response:
                if response.status in (200, 201):
                    print("Brevo API email sent successfully to", recipient_list)
                    return True
        except Exception as e:
            print("Brevo API Email error:", e)

    # 3. Standard SMTP send_mail (Works in local dev, and on paid hosts / unblocked hosts)
    try:
        sent_count = send_mail(
            subject=subject,
            message=message,
            from_email=settings.DEFAULT_FROM_EMAIL,
            recipient_list=recipient_list,
            fail_silently=False
        )
        return sent_count > 0
    except Exception as e:
        print("SMTP send_mail error:", e)
        return False
