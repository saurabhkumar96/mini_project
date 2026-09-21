from django.shortcuts import render
from django.urls import reverse
from django.http import HttpResponse
import datetime
from django.views.generic import ListView
from .models import GeeksModel

def simple_view(request,pk):
    print("hello i am pk",pk)
    context = {"data": "Gfg is the best"}
    a = reverse("simple_view", kwargs={"pk": pk})
    print("olleh",a)
    myData = {"context":context, "a":a,"pk":pk,}
    return render(request, "geeks.html", myData)

def check_age(request):
    age = None
    if request.method == 'POST':
        data = reverse("check_age")
        # request.POST.get returns a string, default to "0"
        age = int(request.POST.get('age', 0))
    return render(request, 'check_age.html', {'age': age})

def loop(request):
    data = "Gfg is the best"
    number_list = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
    context = {
        "data": data,
        "list": number_list
    }
    return render(request, "loop.html", context)


def timeshow(request):
    now = datetime.datetime.now()
    html = f"time is {now}"
    if(request.POST):
        print("I am Post")
    elif (request.GET):
        print("I am get")
    return HttpResponse(html)


class GeeksList(ListView):
    model = GeeksModel
    template_name = "polls/geeksModelList.html"
    context_object_name = "object_list"