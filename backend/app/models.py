from django.db import models

# Create your models here.


class User(models.Model):
    name = models.CharField(max_length=50)

    def __str__(self):
        return self.name

# class Owner(models.Model):
#     name = models.CharField(max_length=50)

# class Type_Document(models.Model):
#     name = models.CharField(max_length=50)

# class Document(models.Model):
#     name = models.CharField(max_length=50)
#     date = models.DateField(auto_now_add=True)
