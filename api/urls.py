from django.urls import path

from . import views

urlpatterns = [
    path("", views.BlogView.as_view(), name="BlogView"),
    path("Author", views.AuthorView.as_view(), name="AuthorView"),
    path("Contact", views.ContactView.as_view(), name="ContactView"),
    path('generate', views.SeedGeneratorView.as_view(), name='GenerateSeedView'),
]
