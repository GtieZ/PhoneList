from lib2to3.refactor import MultiprocessingUnsupported
from django.db import models

# Create your models here.


class Phone(models.Model):
    phone = models.CharField(max_length=120)
    details = models.TextField(blank=True, null=True)
    year = models.IntegerField()
    picture = models.ImageField(blank=True, null=True)
    price = models.FloatField()


    def __str__(self) :
        return self.phone