from django.contrib import admin

# Register your models here.
from .models import Order, GlassType, OrderRow


class OrderRowInline(admin.TabularInline):
    model = OrderRow
    extra = 1

class OrderAdmin(admin.ModelAdmin):
    inlines = [OrderRowInline]

admin.site.register(Order,OrderAdmin)
admin.site.register(GlassType)