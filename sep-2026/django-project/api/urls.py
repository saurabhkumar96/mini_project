from django.urls import path
from django.http import HttpResponse
from . import views

urlpatterns = [
    path('', views.a, name="a"),
    path("b/", views.add_items, name='b'),
    path('all/', views.view_items, name='view_items'),
    path('  /<int:pk>/', views.update_items, name='update-items'),
    path('item/<int:pk>/delete/', views.delete_items, name='delete-items'),

]