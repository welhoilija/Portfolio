from django.db import models

# Create your models here.


class Blog(models.Model):
    created_at = models.DateTimeField(auto_now_add=True)
    header = models.TextField(default=None, null=True)
    image = models.ImageField(upload_to ='uploads/', max_length=100, height_field=None, width_field=None)
    text = models.TextField(default = None, null=True)

    author = models.ForeignKey('Author', on_delete=models.CASCADE)


class Author(models.Model):
    image = models.ImageField(upload_to='uploads/% Y/% m/% d/', max_length=100, height_field=None, width_field=None)

    name = models.CharField(max_length=64)
    description = models.TextField(default=None, null=True)



    def __str__(self):
        return "%s %s" % (self.name, self.description)
