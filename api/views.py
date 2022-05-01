from django.shortcuts import render
from rest_framework import generics
from .serializers import BlogSerializer, AuthorSerializer
from .models import Blog, Author
# Create your views here

class BlogView(generics.ListAPIView):
    queryset = Blog.objects.all()
    serializer_class = BlogSerializer

class AuthorView(generics.ListAPIView):
    queryset = Author.objects.all()
    serializer_class = AuthorSerializer
