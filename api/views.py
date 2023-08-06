from hashlib import sha256

from rest_framework import generics, status
from rest_framework.response import Response
from rest_framework.views import APIView

from .models import Author, Blog, ContactData
from .serializers import AuthorSerializer, BlogSerializer, ContactSerializer


class BlogView(generics.ListAPIView):
    queryset = Blog.objects.all()
    serializer_class = BlogSerializer


class AuthorView(generics.ListAPIView):
    queryset = Author.objects.all()
    serializer_class = AuthorSerializer


class ContactView(APIView):
    serializer_class = ContactSerializer

    def post(self, request, format=None):
        serializer = self.serializer_class(data=request.data)
        if serializer.is_valid():
            text = serializer.data.get("text")
            name = serializer.data.get("name")
            obj, _ = ContactData.objects.update_or_create(
                text=text, name=name)
            obj.send_data_via_email()

        return Response(ContactSerializer(obj).data, status=status.HTTP_201_CREATED)


class SeedGeneratorView(APIView):
    # generate unique sha256 seed for the user using website
    def generate_seed(self, request):
        user_agent = request.META.get('HTTP_USER_AGENT', '')
        addr = request.META.get('REMOTE_ADDR', '')
        unique_string = f"{user_agent}-{addr}".encode('utf-8')
        seed = sha256(unique_string).hexdigest()
        return seed

    def post(self, request, *args, **kwargs):
        seed = self.generate_seed(request)
        return Response({'seed': seed})
