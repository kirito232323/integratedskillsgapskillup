#!/usr/bin/env bash
# exit on error
set -o errexit

# Install requirements
pip install -r requirements.txt

# Run migrations
python manage.py migrate --no-input

# Collect static files
python manage.py collectstatic --no-input
