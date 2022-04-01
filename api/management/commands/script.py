from django.http import HttpResponse
from django.shortcuts import render
from django.core.management.base import BaseCommand
from api.models import  Covid
import requests



def get_data():
    response = requests.get('https://disease.sh/v3/covid-19/countries')

    country = response.json()
    for c in country:
        country = Covid(
        country = c["country"],
        code = c["countryInfo"]["iso2"],
        total_cases =  c["cases"],
        total_deaths = c["deaths"],
        total_recovered = c["recovered"]
        )
        country.save()
        print(country)
class Command(BaseCommand):
  def handle(self, *args, **options):
    get_data()
    print("completed")
