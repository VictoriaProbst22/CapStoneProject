from django.urls import path;
from wishList import views

urlpatterns =[
    path('', views.wishList_books),
    path('all/', views.get_all_books),
    path('<int:pk>/', views.wishList_detail),
]