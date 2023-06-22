from rest_framework import serializers
from .models import Products, Carts, Address
from django.contrib.auth.models import User

class ProductSerializers(serializers.ModelSerializer):
    class Meta:
        model =  Products
        fields = '__all__'
        

class CartsSerializer(serializers.ModelSerializer):
    class Meta:
        model = Carts
        fields = '__all__'
        
        
class AddressSerializers(serializers.ModelSerializer):
    class Meta:
        model = Address
        fields = '__all__'
        
        
        
# User Serializer
class UserSerializer(serializers.ModelSerializer):
    class Meta:
        model = User
        fields = ('id', 'username', 'email')    


# Register Serializer
class RegisterSerializer(serializers.ModelSerializer):
    class Meta:
        model = User
        fields = ('id', 'username', 'email', 'password')
        extra_kwargs = {'password': {'write_only': True}}

    def create(self, validated_data):
        user = User.objects.create_user(validated_data['username'], validated_data['email'], validated_data['password'])

        return user