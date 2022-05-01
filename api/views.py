from django.shortcuts import render
from rest_framework import generics, status
from .serializers import BlogSerializer, AuthorSerializer, ContactSerializer
from .models import Blog, Author, ContactData
from rest_framework.views import APIView
from rest_framework.response import Response
# Create your views here

class BlogView(generics.ListAPIView):
    queryset = Blog.objects.all()
    serializer_class = BlogSerializer

class AuthorView(generics.ListAPIView):
    queryset = Author.objects.all()
    serializer_class = AuthorSerializer


class ContactView(APIView):
    serializer_class = ContactSerializer
    def post(self, request, format=None):
        user = request.user
        serializer = self.serializer_class(data=request.data)
        if serializer.is_valid():
            text = serializer.data.get("text")
            name = serializer.data.get("name")
            obj, created = ContactData.objects.update_or_create(text=text, name=name)


        return Response(ContactSerializer(obj).data, status=status.HTTP_201_CREATED)
        pass
