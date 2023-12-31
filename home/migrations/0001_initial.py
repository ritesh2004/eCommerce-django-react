# Generated by Django 4.1.7 on 2023-06-13 11:12

from django.db import migrations, models


class Migration(migrations.Migration):

    initial = True

    dependencies = [
    ]

    operations = [
        migrations.CreateModel(
            name='Products',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('name', models.CharField(max_length=100)),
                ('image', models.ImageField(upload_to='uploads/images')),
                ('des', models.CharField(max_length=1000)),
                ('price', models.DecimalField(decimal_places=2, max_digits=7)),
                ('category', models.CharField(blank=True, max_length=50, null=True)),
                ('date', models.DateField(auto_now_add=True)),
            ],
        ),
    ]
