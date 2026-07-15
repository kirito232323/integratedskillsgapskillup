from django import forms
from .models import Skill, Milestone, StudyLog

class SkillForm(forms.ModelForm):
    class Meta:
        model = Skill
        fields = ['name', 'category', 'proficiency_level', 'status', 'description']
        widgets = {
            'name': forms.TextInput(attrs={'class': 'form-input', 'placeholder': 'e.g. Django Framework'}),
            'category': forms.TextInput(attrs={'class': 'form-input', 'placeholder': 'e.g. Backend Development'}),
            'proficiency_level': forms.Select(attrs={'class': 'form-input'}),
            'status': forms.Select(attrs={'class': 'form-input'}),
            'description': forms.Textarea(attrs={'class': 'form-input form-textarea', 'placeholder': 'Brief description of your learning objectives...', 'rows': 4}),
        }

class MilestoneForm(forms.ModelForm):
    class Meta:
        model = Milestone
        fields = ['title', 'description', 'target_date']
        widgets = {
            'title': forms.TextInput(attrs={'class': 'form-input', 'placeholder': 'e.g. Complete Django templates tutorial'}),
            'description': forms.Textarea(attrs={'class': 'form-input form-textarea', 'placeholder': 'Description of this specific milestone...', 'rows': 3}),
            'target_date': forms.DateInput(attrs={'class': 'form-input', 'type': 'date'}),
        }

class StudyLogForm(forms.ModelForm):
    class Meta:
        model = StudyLog
        fields = ['date', 'duration_minutes', 'notes']
        widgets = {
            'date': forms.DateInput(attrs={'class': 'form-input', 'type': 'date'}),
            'duration_minutes': forms.NumberInput(attrs={'class': 'form-input', 'placeholder': 'Duration in minutes (e.g., 45)'}),
            'notes': forms.Textarea(attrs={'class': 'form-input form-textarea', 'placeholder': 'What did you cover in this study session?', 'rows': 3}),
        }
