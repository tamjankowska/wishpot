from django.db import models
from django.urls import reverse

class List(models.Model):
    name = models.CharField(max_length=30)
    category = models.ForeignKey(Category, on_delete=models.CASCADE)
    item = models.ForeignKey(Item, on_delete=models.CASCADE)

    def __str__(self):
        return self.name

    def get_absolute_url(self):
        return reverse('lists')

class Category(models.Model):
    name = models.CharField(max_length=30)
    item = models.ForeignKey(Item, on_delete=models.CASCADE)

    def __str__(self):
        return self.name

class Item(models.Model):
    name = models.CharField(max_length=30)
    price = models.DecimalField(decimal_places=2)

