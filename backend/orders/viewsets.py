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

    def get_paginated_response_schema(self, schema):
        return {
            'type': 'object',
            'properties': {
                'current_page': {
                    'type': 'integer',
                    'example': 123,
                },
                'offset': {
                    'type': 'integer',
                    'example': 123,
                },
                'count': {
                    'type': 'integer',
                    'example': 123,
                },
                'next': {
                    'type': 'string',
                    'nullable': True,
                    'format': 'uri',
                    'example': 'http://api.example.org/accounts/?{offset_param}=400&{limit_param}=100'.format(
                        offset_param=self.offset_query_param, limit_param=self.limit_query_param),
                },
                'previous': {
                    'type': 'string',
                    'nullable': True,
                    'format': 'uri',
                    'example': 'http://api.example.org/accounts/?{offset_param}=200&{limit_param}=100'.format(
                        offset_param=self.offset_query_param, limit_param=self.limit_query_param),
                },
                'results': schema,
            },
        }


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