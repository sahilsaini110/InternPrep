from django.shortcuts import render
# from django.http import JsonResponse
from book_api.models import Book
from rest_framework.decorators import api_view
from rest_framework.response import Response
from book_api.serializer import BookSerializer
# Create your views here.

@api_view(['GET'])
def book_list(request):
    ## all books inside this database are consider as objectas so
    books = Book.objects.all() ## this will return complex data, now we need to convert this into python code.
    # books_python = list(books.values()) ## going to covert all books into list and grtting values of all the list. so this is python DS
    # ## now we need to convert this python data structure to json as web intrac using the json. for that we jsonresponce
    # return JsonResponce({
    #     'books': books_python
    # })
    ## instead of doing this work ourself we use seralizer from rest framework to convert this data to json
    serializer = BookSerializer(books, many=True) # many =true means we are converting many different objects into json
    return Response(serializer.data)

@api_view(['POST'])
def book_create(request):
    serializer = BookSerializer(data=request.data) # this is how we tell serializer that we need to convert the json to complex data.
    if serializer.is_valid(): # check wether the incoming data is valid or not.
        serializer.save()     # if data is valid save the data.
        return Response(serializer.data) # return the response
    else:
        return Response(serializer.errors) # if data is not valid return the serializers errors.

@api_view(['DELETE','PUT','GET'])
def book(request, pk):
    if request.method == 'GET':
        book = Book.objects.get(pk=pk) # remember this is a complex data so we need to serialize it.
        serializer = BookSerializer(book) #since here we are working with single object so no many=true.
        return Response(serializer.data)