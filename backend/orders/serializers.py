from drf_extra_fields.relations import PresentablePrimaryKeyRelatedField
from drf_writable_nested import WritableNestedModelSerializer
from rest_framework import serializers

from orders.models import Order, OrderRow, GlassType

class GlassTypeSerializer(serializers.ModelSerializer):
    """serializer for glass type model"""
    class Meta:
        model = GlassType
        fields = "__all__"

class OrderRowSerializer(serializers.ModelSerializer):
    """serializer for order row model"""
    glass_type = PresentablePrimaryKeyRelatedField(
            queryset=GlassType.objects.all(),
            presentation_serializer=GlassTypeSerializer
    )

    class Meta:
        model = OrderRow
        fields = ('id',  'glass_type', 'quantity', 'unit_price', 'width','length')

class OrderSerializer(WritableNestedModelSerializer):

    rows = OrderRowSerializer(many=True)

    class Meta:
        model = Order
        fields = (
            "id",
            "customer_name",
            "order_date",
            "customer_phone",
            "customer_address",
            "rows",

        )

