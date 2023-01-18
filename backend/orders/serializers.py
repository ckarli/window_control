from drf_extra_fields.relations import PresentablePrimaryKeyRelatedField
from drf_spectacular.extensions import OpenApiSerializerFieldExtension
from drf_spectacular.settings import spectacular_settings
from drf_writable_nested import WritableNestedModelSerializer
from rest_framework import serializers

from orders.models import Order, OrderRow, GlassType

class PresentablePrimaryKeyRelatedFieldSchemaExtension(OpenApiSerializerFieldExtension):
    target_class = PresentablePrimaryKeyRelatedField

    def map_serializer_field(self, auto_schema, direction):
        if direction == "response" and spectacular_settings.COMPONENT_SPLIT_REQUEST:
            return auto_schema._map_serializer_field(
                self.target.presentation_serializer, direction, bypass_extensions=True
            )
        else:
            return auto_schema._map_serializer_field(
                self.target, direction, bypass_extensions=True
            )

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

