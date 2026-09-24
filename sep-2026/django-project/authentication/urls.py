
from django.urls import path
from polls import views
from django.http import HttpResponse
# from .views import modelformview_set
from . import views


urlpatterns = [
    path("1/", views.modelformview_set, name="modelForm"),
    path("home/",views.home, name="home")
]