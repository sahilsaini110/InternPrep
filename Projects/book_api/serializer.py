# # we use this to convert the data into desired format
# from rest_framework import serializers
# from book_api.models import Book

# class BookSerializer(serializers.Serializer):
#     id = serializers.IntegerField(read_only = True)
#     name = serializers.CharField(max_length=225)
#     author = serializers.CharField(max_length=225)
#     price = serializers.CharField()
#     quantity = serializers.IntegerField()
# # when we only pass data this will go to  this create function
#     def create(self, data): # Method that will be called in order to create book in our data base.
#         return Book.objects.create(**data)

#     # when we pass instance as well as data then this go to update function.
 
#     def update(self, instance, data):
#         instance.name = data.get('name', instance.name)
#         instance.author = data.get('author', instance.author)
#         instance.price = data.get('price', instance.price)
#         instance.title = data.get('quantity', instance.quantity)

#         instance.save()
#         return instance

from rest_framework import serializers
from book_api.models import Book
from django.forms import ValidationError

class BookSerializer(serializers.ModelSerializer):
    description = serializers.SerializerMethodField()

    class Meta:
        model = Book
        fields = '__all__'

    def validate_title(self, value):
        if value == "goat":
            raise ValidationError("no goat here")
        return value

    def validate(self, data):
        if data["price"] > 200 and data["quantity"] > 20:
            raise ValidationError("ohh bhai bhot jyada h")
        return value

    def get_description(self, data):
        return "this book is "  + data.name + " its prices are " + str(data.price)
