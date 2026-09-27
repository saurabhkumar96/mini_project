from django.urls import path
from django.http import HttpResponse
from . import views

urlpatterns = [
    path('', views.ApiOverview, name="check"),
    # path("b/", views.b, name='b')
]