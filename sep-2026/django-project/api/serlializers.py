from django.db.models import fields
from rest_framework import serializers
from .models import Item

class ItemSerilizer(serializers.ModelSerializer):
    class Meta:
        model= Item #modelName
        fields = ('category','subcategory', 'name', 'amount') #fielf of meta

class CommentSerializer(serializers.Serializer):
    email = serializers.EmailField()
    content = serializers.CharField(max_length = 200)
    created = serializers.DateTimeField()