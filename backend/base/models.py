from django.conf import settings
from django.db import models
from users.models import NewUser


class Owner(models.Model):
    nombre = models.CharField(max_length=50)
    
    def __str__(self):
        return self.nombre


class Documento(models.Model):
    nombre = models.FileField(default=None, blank=True, null=True)
    fecha = models.DateTimeField(auto_now_add=True)
    tipo = models.CharField(max_length=50)
    owner = models.ForeignKey(Owner, null=True, blank=True, on_delete=models.SET_NULL)

    def __str__(self):
        return self.nombre
    
    
class DetalleDocumento(models.Model):
    documento = models.ForeignKey(Documento, null=False, blank=False, on_delete=models.CASCADE, related_name='usuarios')
    usuario = models.ForeignKey(NewUser, null=False, blank=False, on_delete=models.CASCADE)
    
    def __str__(self):
        return str(self.id)
