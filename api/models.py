from django.db import models
from django.core.mail import send_mail
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
    email = models.EmailField(max_length=254)



    def __str__(self):
        return "%s %s" % (self.name, self.description)

class ContactData(models.Model):
    """
    Description: Contact data for sent forms
    """
    created_at = models.DateTimeField(auto_now_add=True)

    name = models.CharField(max_length=64)

    text = models.TextField()


    def send_data_via_email(self):
        send_mail(
            "New contact request from Tuomaskangas.com",
            "Contents: %s %s %s" % (self.created_at, self.name, self.text) ,
            'mail@Tuomaskangas.com',
            ['tkankas@gmail.com'],
            fail_silently=False,
        )



    

    class Meta:
        pass

    def __str__(self):
        return "%s %s %s" % (self.name, self.text, self.created_at)