from django.shortcuts import render
from .models import Products
from .models import Carts
from .models import Address
from .serializers import ProductSerializers
from .serializers import CartsSerializer
from .serializers import AddressSerializers
from rest_framework import viewsets
from rest_framework.views import View

from django.http import JsonResponse
from rest_framework.decorators import api_view

from rest_framework_simplejwt.serializers import TokenObtainPairSerializer
from rest_framework_simplejwt.views import TokenObtainPairView


from rest_framework import generics, permissions
from rest_framework.response import Response
from knox.models import AuthToken
from .serializers import UserSerializer, RegisterSerializer


# Create your views here.
user = ""


class ProductViewSet(viewsets.ModelViewSet):
    queryset = Products.objects.all()
    serializer_class = ProductSerializers
    
class CartsViewSet(viewsets.ModelViewSet):
    queryset = Carts.objects.all()
    serializer_class = CartsSerializer
    
class CartsAddedViewSet(viewsets.ModelViewSet):
    model = Carts
    serializer_class = CartsSerializer
    def get_queryset(self):
        # user = self.request.user 
        user = self.kwargs['username']
        queryset = Carts.objects.filter(user= user)
        return queryset
        
class AddressViewSet(viewsets.ModelViewSet):
    queryset = Address.objects.all()
    serializer_class = AddressSerializers
        
    
    
# Register API
class RegisterAPI(generics.GenericAPIView):
    serializer_class = RegisterSerializer

    def post(self, request, *args, **kwargs):
        serializer = self.get_serializer(data=request.data)
        serializer.is_valid(raise_exception=True)
        user = serializer.save()
        return Response({
        "user": UserSerializer(user, context=self.get_serializer_context()).data,
        "token": AuthToken.objects.create(user)[1]
        })
    
    

class MyTokenObtainPairSerializer(TokenObtainPairSerializer):
    @classmethod
    def get_token(cls, user):
        token = super().get_token(user)
        user = user
        # Add custom claims
        token['username'] = user.username
        # ...

        return token
    
class MyTokenObtainPairView(TokenObtainPairView):
    serializer_class = MyTokenObtainPairSerializer

@api_view(['GET'])

def getView(request):
    routes = [
        "/token",
        "/token/refresh"
    ]
    return JsonResponse(routes, safe=False)    
    