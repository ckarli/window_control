from django.db import models

class Order(models.Model):
    """order model with fields for customer name, order date, customer phone , customer address"""
    customer_name = models.CharField(max_length=100)
    order_date = models.DateField()
    customer_phone = models.CharField(max_length=100)
    customer_address = models.CharField(max_length=100)

    def __str__(self):
        return f"""{self.customer_name} {self.order_date} siparişi"""

class GlassType(models.Model):
    """glass type model with fields for glass type, price
    """
    glass_type = models.CharField(max_length=100)

    def __str__(self):
        return self.glass_type

class OrderRow(models.Model):
    """order row model with fields for order, length width, glass_type, unit_price, quantity"""
    order = models.ForeignKey(Order, on_delete=models.CASCADE , related_name="rows")
    length = models.DecimalField(decimal_places=2, max_digits=10)
    width = models.DecimalField(decimal_places=2, max_digits=10)
    glass_type = models.ForeignKey(GlassType, on_delete=models.CASCADE)
    unit_price = models.DecimalField(decimal_places=2, max_digits=10)
    quantity = models.DecimalField(decimal_places=2, max_digits=10)



