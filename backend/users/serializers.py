from rest_framework import serializers
from users.models import NewUser
from rest_framework_simplejwt.serializers import TokenObtainPairSerializer


################################## users ########################################
class CustomUserListSerializer(serializers.Serializer):
    user_name = serializers.CharField(required=True)
    
    class Meta:
        model = NewUser
        fields = '__all__'

class CustomUserSerializer(serializers.ModelSerializer):
    
    user_name = serializers.CharField(required=True)
    password2 = serializers.CharField(style={'input_type': 'password'}, write_only=True)

    class Meta:
        model = NewUser
        fields = ('user_name', 'password', 'password2')
        extra_kwargs = {'password': {'write_only': True}}

    def create(self, validated_data):
        password = self.validated_data['password']
        password2 = self.validated_data['password2']
        
        if password != password2:
            raise serializers.ValidationError({'error': 'Password and Password 2 should be the same!'})
        
        validated_data.pop('password2', None)
        password = validated_data.pop('password', None)
        instance = self.Meta.model(**validated_data)

        if password is not None:
            instance.set_password(password)
            
        instance.save()
        return instance
    
    
################################## tokens ########################################

class MyTokenObtainPairSerializer(TokenObtainPairSerializer):

    def validate(self, attrs):
        data = super().validate(attrs)
        refresh = self.get_token(self.user)
        data['refresh'] = str(refresh)
        data['access'] = str(refresh.access_token)        
        data['username'] = self.user.user_name
        data['is_superuser'] = self.user.is_superuser
        return data
    
    @classmethod
    def get_token(cls, user):
        token = super().get_token(user)

        token['username'] = user.user_name
        token['first_name'] = user.first_name
        token['start_date'] = str(user.start_date)
    
        return token