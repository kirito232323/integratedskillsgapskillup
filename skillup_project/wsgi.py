"""
WSGI config for skillup_project project.

It exposes the WSGI callable as a module-level variable named ``application``.

For more information on this file, see
https://docs.djangoproject.com/en/6.0/howto/deployment/wsgi/
"""

import os

from django.core.wsgi import get_wsgi_application

os.environ.setdefault('DJANGO_SETTINGS_MODULE', 'skillup_project.settings')

application = get_wsgi_application()

# Auto-migrate safeguard on Render startup
if os.environ.get('RENDER') or os.environ.get('RENDER_EXTERNAL_HOSTNAME'):
    try:
        from django.core.management import call_command
        call_command('migrate', interactive=False)
        print("WSGI: Automatic database migrations verified/completed.")
    except Exception as _e:
        print("WSGI: Automatic migration notice:", _e)
