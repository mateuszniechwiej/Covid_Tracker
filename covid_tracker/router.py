from api.views import CovidViewset
from rest_framework import routers

router = routers.DefaultRouter()
router.register('countries', CovidViewset)
