


from rest_framework import serializers
from .models import Blog, Author

class BlogSerializer(serializers.ModelSerializer):
    class Meta:
        model = Blog
        fields = ("id", "created_at", "header", "image", "text", "author")



class AuthorSerializer(serializers.ModelSerializer):
    class Meta:
        model = Author
        fields = ("id", "name", "image", "description")
