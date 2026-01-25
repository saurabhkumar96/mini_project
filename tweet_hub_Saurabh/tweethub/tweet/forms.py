from django import forms
from .models import Tweet
from django.contrib.auth.forms import UserCreationForm
from django.contrib.auth.models import User
# class TweetForm(forms.Form):
#     first_name = forms.CharField(label="First Name", max_length=100)
#     last_name = forms.CharField(label="Last Name", max_length=100)
#     roll_number = forms.IntegerField(label="Roll Number")
#     password = forms.CharField(label="Password", widget=forms.PasswordInput())


class TweetForms(forms.ModelForm):
    class Meta:
        model = Tweet
        fields = ['text','photo']


class UserRegistrationForm(UserCreationForm):
    class Meta:
        model = User
        fields = ('username','email','password1','password2')
