# we use this to convert the data into desired format
from rest_framework import serializers
from book_api.models import Book

class BookSerializer(serializers.Serializer):
    id = serializers.IntegerField(read_only = True)
    name = serializers.CharField(max_length=225)
    author = serializers.CharField(max_length=225)
    price = serializers.CharField()
    quantity = serializers.IntegerField()

    def create(self, data): # Method that will be called in order to create book in our data base.
        return Book.objects.create(**data)

    