"""ecommerce_backend URL Configuration

The `urlpatterns` list routes URLs to views. For more information please see:
    https://docs.djangoproject.com/en/4.1/topics/http/urls/
Examples:
Function views
    1. Add an import:  from my_app import views
    2. Add a URL to urlpatterns:  path('', views.home, name='home')
Class-based views
    1. Add an import:  from other_app.views import Home
    2. Add a URL to urlpatterns:  path('', Home.as_view(), name='home')
Including another URLconf
    1. Import the include() function: from django.urls import include, path
    2. Add a URL to urlpatterns:  path('blog/', include('blog.urls'))
"""
from django.contrib import admin
from django.urls import path,include
from django.conf import settings
from django.conf.urls.static import static

from home.views import ProductViewSet, CartsViewSet, CartsAddedViewSet, AddressViewSet
from rest_framework import routers

route1 = routers.DefaultRouter()
route1.register("", ProductViewSet, basename='ProductViewSet')

route2 = routers.DefaultRouter()
route2.register("", CartsViewSet, basename='CartsViewSet')

route3 = routers.DefaultRouter()
route3.register("", AddressViewSet, basename='AddressViewSet')

urlpatterns = [
    path('admin/', admin.site.urls),
    path('api/', include(route1.urls)),
    path('carts/', include(route2.urls)),
    path('address/', include(route3.urls)),
    path('', include("home.urls")),
]+ static(settings.MEDIA_URL, document_root= settings.MEDIA_ROOT)