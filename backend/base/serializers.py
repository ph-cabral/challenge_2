from rest_framework import serializers
from base import models
from users.serializers import CustomUserSerializer

# owner
class OwnerSerializer(serializers.ModelSerializer):
    class Meta:
        model = models.Owner
        fields = '__all__'


# detalle documento
class DetalleDocumentoListSerializer(serializers.ModelSerializer):
    usuario = CustomUserSerializer(many=False, read_only=True)
    class Meta:
        model = models.DetalleDocumento
        fields = ['id','usuario']
        

class DetalleDocumentoCrudSerializer(serializers.ModelSerializer):
    class Meta:
        model = models.DetalleDocumento
        fields = '__all__'



# documento
class DocumentoListSerializer(serializers.ModelSerializer):
    owner = OwnerSerializer(many=False, read_only=True)
    usuarios = DetalleDocumentoListSerializer(many=True, read_only=True) 
    class Meta:
        model = models.Documento
        fields = '__all__'
        

class DocumentoCrudSerializer(serializers.ModelSerializer):
    class Meta:
        model = models.Documento
        fields = '__all__'



