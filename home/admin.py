from django.contrib import admin
from .models import Products, Carts, Address
# Register your models here.

# admin.site.register(Products)

@admin.register(Products)
class ProductViewAdmin(admin.ModelAdmin):
    list_display = ["id","name","price"]
    
@admin.register(Carts)
class CartsViewAdmin(admin.ModelAdmin):
    list_display = ["user","name","price"]
    
@admin.register(Address)
class AddressViewAdmin(admin.ModelAdmin):
    list_display = ["username","city","contact","state"]


    