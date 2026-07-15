from django.contrib import admin
from django.contrib.auth.admin import UserAdmin as BaseUserAdmin
from django.contrib.auth.models import User
from .models import (
    Profile, JobVacancy, CentralizedSkill, ApplicantSkill, Referral,
    JobSkillRequirement, TrainingProgram, TrainingEnrollment, Notification,
    Milestone, StudyLog, Education, WorkExperience, Certification
)

class ProfileInline(admin.StackedInline):
    model = Profile
    can_delete = False
    verbose_name_plural = 'Profile Details'

class UserAdmin(BaseUserAdmin):
    inlines = [ProfileInline]
    list_display = ('username', 'email', 'first_name', 'last_name', 'get_role', 'get_verified', 'is_staff')

    def get_role(self, instance):
        return instance.profile.get_role_display() if hasattr(instance, 'profile') else 'None'
    get_role.short_description = 'Role'

    def get_verified(self, instance):
        return instance.profile.is_verified if hasattr(instance, 'profile') else False
    get_verified.short_description = 'Verified'

admin.site.unregister(User)
admin.site.register(User, UserAdmin)
admin.site.register(Profile)

# Register core models
admin.site.register(JobVacancy)
admin.site.register(CentralizedSkill)
admin.site.register(ApplicantSkill)
admin.site.register(Referral)
admin.site.register(JobSkillRequirement)
admin.site.register(TrainingProgram)
admin.site.register(TrainingEnrollment)
admin.site.register(Notification)
admin.site.register(Milestone)
admin.site.register(StudyLog)
admin.site.register(Education)
admin.site.register(WorkExperience)
admin.site.register(Certification)

