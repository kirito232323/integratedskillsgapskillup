import os
import django
import datetime
from django.utils import timezone

os.environ.setdefault('DJANGO_SETTINGS_MODULE', 'skillup_project.settings')
django.setup()

from tracker.models import Skill, Milestone, StudyLog

def seed():
    # Clear existing data
    print("Clearing existing data...")
    Skill.objects.all().delete()
    Milestone.objects.all().delete()
    StudyLog.objects.all().delete()

    print("Creating sample skills, milestones, and study logs...")

    # Today
    today = timezone.localdate()

    # 1. UI/UX & CSS Aesthetics (Completed Skill)
    css_skill = Skill.objects.create(
        name="UI/UX & CSS Aesthetics",
        category="Frontend",
        proficiency_level="intermediate",
        status="completed",
        description="Level up styling capabilities with custom CSS variables, gradients, responsive layout systems, and glassmorphic designs."
    )

    Milestone.objects.create(
        skill=css_skill,
        title="Master CSS Flexbox and Grid layouts",
        description="Understand alignment properties, grid areas, and responsive auto-fit/fill patterns.",
        is_completed=True,
        target_date=today - datetime.timedelta(days=10)
    )
    Milestone.objects.create(
        skill=css_skill,
        title="Learn keyframe animations and transition properties",
        description="Build smooth micro-interactions, hover scales, and fade-in entries.",
        is_completed=True,
        target_date=today - datetime.timedelta(days=5)
    )
    Milestone.objects.create(
        skill=css_skill,
        title="Implement a modern glassmorphic dashboard",
        description="Apply backdrop-filter blurs, subtle borders, and glowing accents.",
        is_completed=True,
        target_date=today - datetime.timedelta(days=2)
    )

    StudyLog.objects.create(
        skill=css_skill,
        date=today - datetime.timedelta(days=6),
        duration_minutes=90,
        notes="Built responsive flexbox and grid layouts for sidebar navigation."
    )
    StudyLog.objects.create(
        skill=css_skill,
        date=today - datetime.timedelta(days=5),
        duration_minutes=60,
        notes="Designed keyframe animations and subtle scale transitions on hover interactions."
    )
    StudyLog.objects.create(
        skill=css_skill,
        date=today - datetime.timedelta(days=2),
        duration_minutes=120,
        notes="Completed glassmorphic panel styling with color-coded glow effects."
    )

    # 2. Django Web Framework (In Progress)
    django_skill = Skill.objects.create(
        name="Django Web Framework",
        category="Backend",
        proficiency_level="beginner",
        status="in_progress",
        description="Learn to build secure, robust, and data-driven backend applications using the Django Framework."
    )

    Milestone.objects.create(
        skill=django_skill,
        title="Initialize Django project and configure database",
        description="Configure settings, databases, and register apps.",
        is_completed=True,
        target_date=today - datetime.timedelta(days=4)
    )
    Milestone.objects.create(
        skill=django_skill,
        title="Implement models, forms, and custom views",
        description="Create database schemas, map URLs, write context loaders and templates.",
        is_completed=True,
        target_date=today - datetime.timedelta(days=2)
    )
    Milestone.objects.create(
        skill=django_skill,
        title="Incorporate interactive chart analytics",
        description="Integrate Chart.js to map database query aggregations dynamically.",
        is_completed=True,
        target_date=today
    )
    Milestone.objects.create(
        skill=django_skill,
        title="Deploy application to production server",
        description="Configure static files collection and run on a hosting provider.",
        is_completed=False,
        target_date=today + datetime.timedelta(days=5)
    )

    StudyLog.objects.create(
        skill=django_skill,
        date=today - datetime.timedelta(days=4),
        duration_minutes=120,
        notes="Set up virtual environment, requirements.txt, and initialized skillup_project."
    )
    StudyLog.objects.create(
        skill=django_skill,
        date=today - datetime.timedelta(days=2),
        duration_minutes=90,
        notes="Created model schemas, written views for CRUD workflows, and wired up URLs."
    )
    StudyLog.objects.create(
        skill=django_skill,
        date=today,
        duration_minutes=60,
        notes="Wrote custom views logic for data charts aggregation and populated dashboard templates."
    )

    # 3. Python Programming (In Progress)
    python_skill = Skill.objects.create(
        name="Python Programming",
        category="Backend",
        proficiency_level="intermediate",
        status="in_progress",
        description="Deep dive into Python syntax, advanced data structures, OOP principles, and system integrations."
    )

    Milestone.objects.create(
        skill=python_skill,
        title="Understand Decorators and Generators",
        description="Write custom wrapper functions and yield-based iterators.",
        is_completed=True,
        target_date=today - datetime.timedelta(days=5)
    )
    Milestone.objects.create(
        skill=python_skill,
        title="Learn Multi-threading and AsyncIO programming",
        description="Leverage concurrency structures to run background task loops.",
        is_completed=False,
        target_date=today + datetime.timedelta(days=7)
    )
    Milestone.objects.create(
        skill=python_skill,
        title="Build custom package and publish to PyPI",
        description="Organize packaging details and write setup scripts.",
        is_completed=False,
        target_date=today + datetime.timedelta(days=14)
    )

    StudyLog.objects.create(
        skill=python_skill,
        date=today - datetime.timedelta(days=5),
        duration_minutes=60,
        notes="Practiced decorator patterns for profiling function run times."
    )
    StudyLog.objects.create(
        skill=python_skill,
        date=today - datetime.timedelta(days=3),
        duration_minutes=90,
        notes="Read documentation about Python's GIL and thread safety concepts."
    )
    StudyLog.objects.create(
        skill=python_skill,
        date=today - datetime.timedelta(days=1),
        duration_minutes=45,
        notes="Wrote simple generator pipelines to handle streaming data processing."
    )

    print("Database seeding completed successfully!")

if __name__ == '__main__':
    seed()
