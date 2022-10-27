"""urls for rest_framework"""
from django.urls import path, include
from rest_framework import routers
from orders import viewsets

router = routers.DefaultRouter()
router.register(r"orders", viewsets.OrderViewSet)
router.register(r"glass_types", viewsets.GlassTypeViewSet)

urlpatterns = [
    path("", include(router.urls)),
]