from rest_framework import viewsets

from orders.models import Order, GlassType
from orders.serializers import OrderSerializer, GlassTypeSerializer


class OrderViewSet(viewsets.ModelViewSet):
    """API endpoint that allows orders to be viewed or edited."""

    queryset = Order.objects.all().order_by("-order_date")
    serializer_class = OrderSerializer

class GlassTypeViewSet(viewsets.ModelViewSet):
    """API endpoint that allows glass types to be viewed or edited."""

    queryset = GlassType.objects.all()
    serializer_class = GlassTypeSerializer