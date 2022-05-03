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

class GetContactData(generics.ListAPIView):
    serializer_class = ContactSerializer
    lookup_url_kwarg = "id"

    def get(self, request, format=None):
        user = request.user
        contact_id = request.GET.get(self.lookup_url_kwarg)
        if contact_id != None:
            contactdata = ContactData.objects.filter(id=contact_id)
            if len(contactdata) != 0:
                data = ContactSerializer(contactdata[0]).data
                return Response(data, status=status.HTTP_200_OK)
            return Response({"Contactdata not found": "invalid id"}, status=HTTP_404_BAD_REQUEST)

