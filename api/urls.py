from django.urls import path

from . import views

urlpatterns = [
    path("", views.BlogView.as_view(), name="BlogView"),
    path("Author", views.AuthorView.as_view(), name="AuthorView"),
    path("Contact", views.ContactView.as_view(), name="ContactView"),
    path("get_contact", views.GetContactData.as_view(), name="GetContactDataView")
]