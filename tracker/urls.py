from django.urls import path
from . import views

urlpatterns = [
    path('', views.dashboard, name='dashboard'),
    path('legacy-skills/', views.legacy_skill_dashboard, name='legacy_skill_dashboard'),
    path('skill/new/', views.skill_create, name='skill_create'),
    path('skill/<int:pk>/', views.skill_detail, name='skill_detail'),
    path('skill/<int:pk>/edit/', views.skill_edit, name='skill_edit'),
    path('skill/<int:pk>/delete/', views.skill_delete, name='skill_delete'),
    path('skill/<int:skill_id>/milestone/add/', views.add_milestone, name='add_milestone'),
    path('milestone/<int:milestone_id>/toggle/', views.toggle_milestone, name='toggle_milestone'),
    path('skill/<int:skill_id>/log/add/', views.add_study_log, name='add_study_log'),

    # Auth URLs
    path('login/', views.login_view, name='login'),
    path('signup/', views.signup_view, name='signup'),
    path('forgot-password/', views.forgot_password, name='forgot_password'),
    path('verify-reset-code/', views.verify_reset_code, name='verify_reset_code'),
    path('reset-password/', views.reset_password, name='reset_password'),
    path('verify/', views.verify_view, name='verify'),
    path('verify/resend/', views.resend_verification_code, name='resend_verification_code'),
    path('logout/', views.logout_view, name='logout'),

    # Admin URLs
    path('admin-dashboard/', views.peso_dashboard_admin, name='peso_dashboard_admin'),
    path('peso-admin/applicants/', views.applicant_monitoring_admin, name='applicant_monitoring_admin'),
    path('peso-admin/applicants/import/', views.bulk_import_applicants, name='bulk_import_applicants'),
    path('peso-admin/applicants/<int:profile_id>/interview/', views.coordinator_interview, name='coordinator_interview'),
    path('peso-admin/applicants/<int:profile_id>/status-update/', views.update_applicant_status, name='update_applicant_status'),
    path('peso-admin/employers/', views.employer_management_admin, name='employer_management_admin'),
    path('peso-admin/employers/<int:profile_id>/verify/', views.verify_employer, name='verify_employer'),
    path('peso-admin/employment-tracking/', views.employment_tracking_admin, name='employment_tracking_admin'),
    path('peso-admin/referrals/create/', views.create_referral, name='create_referral'),
    path('peso-admin/referrals/<int:referral_id>/update-status/', views.update_referral_status, name='update_referral_status'),
    path('peso-admin/referrals/<int:referral_id>/log-contact/', views.log_contact_attempt, name='log_contact_attempt'),
    path('peso-admin/analytics/export/', views.export_analytics_csv, name='export_analytics_csv'),
    path('peso-admin/job-matching/', views.job_matching_analytics_admin, name='job_matching_analytics_admin'),
    path('peso-admin/profile/', views.peso_profile_admin, name='peso_profile_admin'),
    path('peso-admin/skill-monitoring/', views.skill_monitoring_admin, name='skill_monitoring_admin'),
    path('peso-admin/training-monitoring/', views.training_monitoring_admin, name='training_monitoring_admin'),
    path('peso-admin/vacancies/', views.vacancy_management_admin, name='vacancy_management_admin'),
    path('peso-admin/vacancies/<int:vacancy_id>/', views.vacancy_detail_admin, name='vacancy_detail_admin'),

    # Applicant URLs
    path('applicant-dashboard/', views.applicant_dashboard, name='applicant_dashboard'),
    path('applicant/profile/', views.applicant_profile, name='applicant_profile'),
    path('applicant/job-search/', views.job_search, name='job_search'),
    path('applicant/skill-gap/', views.skill_gap_analysis, name='skill_gap_analysis'),
    path('applicant/company-profile/<int:employer_id>/', views.company_profile_detail, name='company_profile_detail'),
    path('applicant/apply/<int:vacancy_id>/', views.apply_to_job, name='apply_to_job'),
    path('applicant/bookmark/<int:vacancy_id>/', views.toggle_bookmark, name='toggle_bookmark'),
    path('applicant/applications/', views.applicant_applications_list, name='applicant_applications_list'),
    path('applicant/applications/<int:referral_id>/', views.applicant_application_details, name='applicant_application_details'),
    path('applicant/training/', views.training_recommendations, name='training_recommendations'),
    path('applicant/training/enroll/<int:program_id>/', views.applicant_enroll_training, name='applicant_enroll_training'),
    path('applicant/wizard/', views.profile_wizard, name='profile_wizard'),
    path('applicant/settings/', views.applicant_settings, name='applicant_settings'),
    path('applicant/notifications/', views.applicant_notifications, name='applicant_notifications'),

    # Employer URLs
    path('employer-dashboard/', views.employer_dashboard, name='employer_dashboard'),
    path('employer/applicant-detail/', views.applicant_details_employer, name='applicant_details_employer'),
    path('employer/applicant-detail/<int:applicant_id>/', views.applicant_details_employer, name='applicant_details_employer_id'),
    path('employer/gap-analysis/', views.applicant_gap_analysis_employer, name='applicant_gap_analysis_employer'),
    path('employer/applicants/', views.applicants_employer, name='applicants_employer'),
    path('employer/company-profile/', views.company_profile_employer, name='company_profile_employer'),
    path('employer/hiring-tracker/', views.hiring_tracker_employer, name='hiring_tracker_employer'),
    path('employer/job-management/', views.job_management_employer, name='job_management_employer'),
    path('employer/job-management/<int:vacancy_id>/status/', views.job_status_update, name='job_status_update'),
    path('employer/job-management/<int:vacancy_id>/delete/', views.job_delete, name='job_delete'),
    path('employer/notifications/', views.employer_notifications_view, name='employer_notifications'),
    path('employer/send-offer/<int:applicant_id>/<int:vacancy_id>/', views.send_offer_employer, name='send_offer_employer'),
    path('employer/schedule-interview/', views.schedule_interview_employer, name='schedule_interview_employer'),
    path('employer/cancel-interview/<int:interview_id>/', views.cancel_interview_employer, name='cancel_interview_employer'),

    # Database Reset URL
    path('reset-db/', views.reset_db_view, name='reset_db_view'),
]


