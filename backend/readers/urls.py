from importlib.resources import path
from django.urls import path
from . import views

urlpatterns = [
    path('<int:pk>/', views.reader_detail),
     path('', views.user_books),
    path('all/', views.get_all_readers),
]