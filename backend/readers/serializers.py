from rest_framework import serializers
from .models import Reader

class ReadersSerializer(serializers.ModelSerializer):
    class Meta:
        model = Reader
        fields = ['id', 'user', 'text']
        depth = 1