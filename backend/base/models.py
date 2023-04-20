from django.db import models

# Create your models here.

class Data(models.Model):
   pregnancy = models.FloatField()
   glucose = models.FloatField()
   bloodPressure = models.FloatField()
   skinThickness = models.FloatField()
   insulin = models.FloatField()
   bmi = models.FloatField()
   diabetesPedigreeFunction = models.FloatField()
   age = models.FloatField()
   

class User(models.Model):
   name = models.CharField(max_length=200)
   email = models.CharField(max_length=200)
   password = models.CharField(max_length=200)
