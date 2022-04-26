# from django.shortcuts import render
# # from django.http import JsonResponse
# from book_api.models import Book
# from rest_framework.decorators import api_view
# from rest_framework import status
# from rest_framework.response import Response
# from book_api.serializer import BookSerializer
# # Create your views here.

# @api_view(['GET'])
# def book_list(request):
#     ## all books inside this database are consider as objectas so
#     books = Book.objects.all() ## this will return complex data, now we need to convert this into python code.
#     # books_python = list(books.values()) ## going to covert all books into list and grtting values of all the list. so this is python DS
#     # ## now we need to convert this python data structure to json as web intrac using the json. for that we jsonresponce
#     # return JsonResponce({
#     #     'books': books_python
#     # })
#     ## instead of doing this work ourself we use seralizer from rest framework to convert this data to json
#     serializer = BookSerializer(books, many=True) # many =true means we are converting many different objects into json
#     return Response(serializer.data)

# @api_view(['POST'])
# def book_create(request):
#     serializer = BookSerializer(data=request.data) # this is how we tell serializer that we need to convert the json to complex data.
#     if serializer.is_valid(): # check wether the incoming data is valid or not.
#         serializer.save()     # if data is valid save the data.
#         return Response(serializer.data) # return the response
#     else:
#         return Response(serializer.errors,  status = status.HTTP_400_BAD_REQUEST) # if data is not valid return the serializers errors.

# @api_view(['DELETE','PUT','GET'])
# def book(request, pk):

#     try:
#         book = Book.objects.get(pk=pk) 
#     except:
#         return Response({
#                 'error':'book does not exist.'
#         }, status= status.HTTP_404_NOT_FOUND)

#     if request.method == 'GET':
#     # remember this is a complex data so we need to serialize it.
#         serializer = BookSerializer(book) #since here we are working with single object so no many=true.
#         return Response(serializer.data)

#     if request.method == 'PUT':
#         serializer = BookSerializer(book, data=request.data) # here we passing the instance as well as data that we wanna updated to.
#         if serializer.is_valid():
#             serializer.save()
#             return Response(serializer.data) # return the response
#         else:
#             return Response(serializer.errors, status = status.HTTP_400_BAD_REQUEST)

#     if request.method == 'DELETE':
#         book.delete()
#         return Response(status = status.HTTP_204_NO_CONTENT)

###################### We will use classes instaed of function in our views for more clear and clean code. #########################

from rest_framework.views import APIView
from book_api.models import Book
from rest_framework import status
from rest_framework.response import Response
from book_api.serializer import BookSerializer

class BookList(APIView):
    def get(self, request):
        books = Book.objects.all()
        serializer = BookSerializer(books, many=True)
        return Response(serializer.data)

class BookCreate(APIView):
    def post(self, request):
        serializer = BookSerializer(data=request.data)
        if serializer.is_valid():
            serializer.save()  
            return Response(serializer.data) # return the response
        else:
            return Response(serializer.errors,  status = status.HTTP_400_BAD_REQUEST) # if data is not valid return the serializers errors.
class BookDetails(APIView):
    def get_book_by_pk(self, pk):
        try:
            return Book.objects.get(pk=pk) 
        except:
            return Response({
                'error':'book does not exist.'
            }, status= status.HTTP_404_NOT_FOUND)
    def get(self, request, pk):
        book = self.get_book_by_pk(pk)
        serializer = BookSerializer(book) 
        return Response(serializer.data)

    def get(self, request, pk):
        book = self.get_book_by_pk(pk)
        serializer = BookSerializer(book, data=request.data) 
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data) # return the response
        else:
            return Response(serializer.errors, status = status.HTTP_400_BAD_REQUEST)

    def get(self, request, pk):
        book = self.get_book_by_pk(pk)
        book.delete()
        return Response(status = status.HTTP_204_NO_CONTENT)