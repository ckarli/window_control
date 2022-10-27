from collections import OrderedDict

from rest_framework import viewsets, filters
from rest_framework.pagination import LimitOffsetPagination
from rest_framework.response import Response

from orders.models import Order, GlassType
from orders.serializers import OrderSerializer, GlassTypeSerializer



class CustomLimitOffsetPagination(LimitOffsetPagination):
    default_limit = 10
    max_limit = 1000

    def get_paginated_response(self, data):
        return Response(OrderedDict([
            ('count', self.count),
            ('current_page', self.offset // self.limit + 1),
            ('offset', self.offset),
            ('next', self.get_next_link()),
            ('previous', self.get_previous_link()),
            ('results', data)
        ]))



class OrderViewSet(viewsets.ModelViewSet):
    """API endpoint that allows orders to be viewed or edited."""

    queryset = Order.objects.all().order_by("-order_date")
    serializer_class = OrderSerializer
    pagination_class = CustomLimitOffsetPagination
    filter_backends = [filters.SearchFilter]

    search_fields = ["customer_address", "customer_name", "customer_phone"]


class GlassTypeViewSet(viewsets.ModelViewSet):
    """API endpoint that allows glass types to be viewed or edited."""

    queryset = GlassType.objects.all()
    serializer_class = GlassTypeSerializer