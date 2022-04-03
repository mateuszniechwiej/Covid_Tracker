from django.db import models


class Covid(models.Model):
    country = models.CharField(max_length=50)
    code = models.CharField(max_length=10, null=True, blank=True)
    total_cases = models.CharField(max_length=50, null=True, blank=True)
    total_deaths = models.CharField(max_length=50, null=True, blank=True)
    total_recovered = models.CharField(max_length=50, null=True, blank=True)

    def __str__(self):
        return self.country
