from rest_framework import serializers
from .models import Readers

class ReadersSerializer(serializers.ModelSerializer):
    class Meta:
        model = Readers
        fields = ['id', 'user', 'text']
        depth = 1