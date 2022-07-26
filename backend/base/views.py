from rest_framework import generics
from base.models import Owner, Documento, DetalleDocumento
from base import serializers
from django.contrib.auth.models import User
from rest_framework.validators import ValidationError



######################### owners
class OwnerList(generics.ListCreateAPIView):
    queryset = Owner.objects.all()
    serializer_class = serializers.OwnerSerializer


class OwnerDetail(generics.RetrieveUpdateDestroyAPIView):
    serializer_class = serializers.OwnerSerializer

    def get_queryset(self):
        return Owner.objects.filter(id=self.kwargs['pk'])


######################### documentos
class DocumentoList(generics.ListAPIView):
    queryset = Documento.objects.all()
    serializer_class = serializers.DocumentoListSerializer
    

class DocumentoCreate(generics.CreateAPIView):
    queryset = Documento.objects.all()
    serializer_class = serializers.DocumentoCrudSerializer
    

class DocumentoUpdate(generics.UpdateAPIView):
    queryset = Documento.objects.all()
    serializer_class = serializers.DocumentoCrudSerializer
 

class DocumentoDetail(generics.RetrieveDestroyAPIView):
    serializer_class = serializers.DocumentoListSerializer

    def get_queryset(self):
        return Documento.objects.filter(id=self.kwargs['pk'])



######################### detalle documentos
class DetalleDocumentoList(generics.ListAPIView):
    queryset = DetalleDocumento.objects.all()
    serializer_class = serializers.DetalleDocumentoListSerializer
    

class DetalleDocumentoCreate(generics.CreateAPIView):
    queryset = DetalleDocumento.objects.all()
    serializer_class = serializers.DetalleDocumentoCrudSerializer
    

class DetalleDocumentoUpdate(generics.UpdateAPIView):
    queryset = DetalleDocumento.objects.all()
    serializer_class = serializers.DetalleDocumentoCrudSerializer
 

class DetalleDocumentoDetail(generics.RetrieveDestroyAPIView):
    serializer_class = serializers.DetalleDocumentoListSerializer

    def get_queryset(self):
        return DetalleDocumento.objects.filter(id=self.kwargs['pk'])

