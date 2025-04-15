from django.urls import path
from .views import display_details, add_details, book_detail

urlpatterns = [
    path('display_details/', display_details, name='display_details'),
    path('add_details/', add_details, name="add_details"),
    path('book_detail/<int:pk>', book_detail, name="book_detail"),
]