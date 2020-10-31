from rest_framework import serializers

from api.models import Catalog


class BookDetailSerializer(serializers.ModelSerializer):
    class Meta:
        model = Catalog
        fields = "__all__"
