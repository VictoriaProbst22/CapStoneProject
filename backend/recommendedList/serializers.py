from rest_framework import serializers;
from .models import recommendedList


class recommendedListSerializer(serializers.ModelSerializer):
    class Meta:
        model = recommendedList
        fields = ['id', 'user', 'title', 'authors']
        depth = 1