from django.db import models

# Create your models here.

class Products(models.Model):
    name = models.CharField(max_length=1000, blank=False, null=False)
    image = models.ImageField(null=False, blank=False, upload_to='uploads/images')
    specification = models.TextField(max_length=5000, blank=False, null= False)
    price = models.DecimalField(max_digits=7, decimal_places=2, null=False, blank=False)
    category = models.CharField(max_length=50, blank=True, null= True)
    date = models.DateField(auto_now_add=True)
    
    def __str__(self):
        return self.name
    

class Carts(models.Model):
    user = models.CharField(max_length=15, blank=False, null=False)
    name = models.CharField(max_length=1000, blank=False, null=False)
    image = models.CharField(max_length=200, null=False, blank=False)
    specification = models.TextField(max_length=5000, blank=False, null= False)
    quantity = models.IntegerField(default=1)
    price = models.DecimalField(max_digits=7, decimal_places=2, null=False, blank=False)
    category = models.CharField(max_length=50, blank=True, null= True)
    date = models.DateField(auto_now_add=True)
    
    def __str__(self):
        return self.user
    
class  Address(models.Model):
    name = models.CharField(max_length=100, blank=False, null=False)
    email = models.EmailField(max_length=100, blank=False, null=False)
    contact = models.IntegerField(max_length=10, blank=False, null=False)
    username = models.CharField(max_length=100, blank=False, null=False)
    address1 = models.CharField(max_length=100, blank=False, null=False)
    address2 = models.CharField(max_length=100, blank=False, null=False)
    city = models.CharField(max_length=100, blank=False, null=False)
    state = models.CharField(max_length=100, blank=False, null=False)
    zipcode = models.IntegerField(blank=False, null=False)
    
    def __str__(self):
        return self.name