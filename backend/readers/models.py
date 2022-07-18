from django.db import models
from authentication.models import User

# Create your models here.
class Reader(models.Model):
    user = models.ForeignKey(User, on_delete=models.CASCADE)
    text = models.CharField(max_length=225)
    title = models.CharField(max_length=225)
    authors = models.CharField(max_length=225)