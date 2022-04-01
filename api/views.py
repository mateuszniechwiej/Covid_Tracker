from rest_framework import viewsets
from . import models
from . import serializers


class CovidViewset(viewsets.ModelViewSet):
    queryset = models.Covid.objects.all()
    serializer_class = serializers.covidSerializer
