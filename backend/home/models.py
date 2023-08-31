from django.conf import settings
from django.db import models
class Home(models.Model):
    'Generated Model'
    number = models.BigIntegerField()
    name = models.CharField(max_length=255,null=True,blank=True,)
    gender = models.CharField(max_length=255,null=True,blank=True,)
    address = models.TextField(null=True,blank=True,)
