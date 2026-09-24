from django.shortcuts import render, redirect
from django.contrib import messages
from django.contrib.auth import aauthenticate,login
from django.contrib.auth.decorators import login_required
from django.contrib.auth.models import User
from .models import *
from django.shortcuts import render
from django.forms import modelformset_factory
from .models import GeekModel



def home(request):
    print("check")
    return render(request,"home.html")

def login_page(request):
    if request.method== "POST":
        pass
    else:
        login(request,user)

def modelformview_set(request):
    GeeksFormSet = modelformset_factory(GeekModel, fields=['title','description','avatar'],extra=2)

    if request.method == 'POST':
        formset = GeeksFormSet(request.POST, request.FILES)
        if formset.is_valid():
            formset.save()
            return redirect('modelForm')
        else:
            formset = GeeksFormSet(queryset=GeekModel.objects.all())

    formset = GeeksFormSet(queryset=GeekModel.objects.none())
    return render(request, 'form.html',{'formset':formset})

