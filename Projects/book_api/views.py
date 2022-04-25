from django.shortcuts import render
from django.http import JsonResponce
from book_api.models import Book
# Create your views here.

def book_list(request):
    # all books inside this database are consider as objectas so
    books = Book.objects.all() # this will return complex data, now we need to convert this into python code.
    books_python = list(books.values()) # going to covert all books into list and grtting values of all the list. so this is python DS
    # now we need to convert this python data structure to json as web intrac using the json. for that we jsonresponce
    return JsonResponce({
        'books': books_python
    })