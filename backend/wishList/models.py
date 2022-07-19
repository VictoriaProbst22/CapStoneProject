from django.db import models
from authentication.models import User;


# Create your models here.
class wishList(models.Model):
    user = models.ForeignKey(User, on_delete=models.CASCADE)
    title= models.CharField(max_length=225)
    authors = models.CharField(max_length=225)