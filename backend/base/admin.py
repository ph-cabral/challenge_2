from django.contrib import admin
from base import models


admin.site.register(models.Owner)
admin.site.register(models.Documento)
admin.site.register(models.DetalleDocumento)

