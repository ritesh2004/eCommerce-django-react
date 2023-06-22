from django.contrib import admin
from django.urls import path
from . import views
from .views import MyTokenObtainPairView
from .views import RegisterAPI

from .views import CartsAddedViewSet
# from .views import CartsAddedViewSet

from rest_framework_simplejwt.views import (
    TokenRefreshView,
)



urlpatterns = [
    path('admin/', admin.site.urls),
    path('login/token/', MyTokenObtainPairView.as_view(), name='token_obtain_pair'),
    path('login/token/refresh/', TokenRefreshView.as_view(), name='token_refresh'),
    path('login/register/', RegisterAPI.as_view(), name='register'),
    path('added/<username>/', CartsAddedViewSet.as_view({'get':'list'}), name="added_carts"),
]