from django.shortcuts import render, redirect
from django.contrib import messages
from django.contrib.auth import authenticate,login
from django.contrib.auth.decorators import login_required
from django.contrib.auth.models import User
from .models import *
from django.shortcuts import render
from django.forms import modelformset_factory
from .models import GeekModel
from django.contrib.auth.models import User



def home(request):
    return render(request,"home.html")

# login
def login_page(request):
    if request.method =="POST":
        username = request.POST.get("username")
        password = request.POST.get("password")

        if not User.objects.filter(username=username).exists():
            messages.error(request,"Invalid user")
            return redirect("login")
        user = authenticate(username=username, password=password)

        if user is None:
            messages.error(request,"Invalid password")
            return redirect("login")
        else:
            login(request,user)
            return redirect("home")
    else:
        return render(request, "login.html")


def register(request):
    if request.method == "POST":
        firstName = request.POST.get("first_name")
        lastName = request.POST.get("last_name")
        username = request.POST.get("username")
        password = request.POST.get("password")

        user = User.objects.filter(username=username)
        if user.exists():
            messages.info(request,"user verfied")
            return redirect('register')

        user = User.objects.create(
            username = username,
            last_name= lastName,
            first_name = firstName
        )
        user.set_password(password)
        user.save()
        messages.info(request, "user created successfully")
        return redirect('home')
    else:
        return render(request, "register.html")



# completed this for the modelformview
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

