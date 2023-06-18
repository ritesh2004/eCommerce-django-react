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