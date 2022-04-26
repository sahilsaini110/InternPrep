from django.contrib import admin
from django.urls import path
from book_api.views import BookList, BookCreate, BookDetails #, book_create, book , book_list

urlpatterns = [
    path('admin/', admin.site.urls),
    path('list/', BookList.as_view() ), #book_list for functin view
    path('<int:pk>', BookDetails.as_view()),
    path('', BookCreate.as_view() ) #book_create for functin view
]
