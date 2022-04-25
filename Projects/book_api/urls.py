from django.contrib import admin
from django.urls import path
from book_api.views import book_list, book_create, book

urlpatterns = [
    path('admin/', admin.site.urls),
    path('list/', book_list),
    path('<int:pk>', book),
    path('', book_create)
]
