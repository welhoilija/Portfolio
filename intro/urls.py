from django.urls import path

from . import views

urlpatterns = [
    path("", views.index, name="frontpage"),
    path("Aboutme", views.index),
    path("Projects", views.index),
    path("Contact", views.index),
    path("Skills", views.index),
]
