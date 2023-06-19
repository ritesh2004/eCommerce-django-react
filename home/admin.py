from django.contrib import admin
from .models import Products
# Register your models here.

# admin.site.register(Products)

@admin.register(Products)
class ProductViewAdmin(admin.ModelAdmin):
    list_display = ["id","name","price"]
    