from rest_framework import serializers;
from .models import wishList

class wishListSeralizer(serializers.ModelSerializer):
    class Meta:
        model = wishList
        fields = ['id', 'user', 'title', 'authors']
        depth = 1