from django.db import models

class Covid(models.Model):
    country = models.CharField(max_length=50)
    code = models.CharField(max_length=10)
    total_cases =  models.CharField(max_length=50)  
    total_deaths = models.CharField(max_length=50)
    total_recorder = models.CharField(max_length=50)

    def __str__(self):
        return self.country
