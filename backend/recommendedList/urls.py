from django.urls import path;
from recommendedList import views

urlpatterns =[
    path('', views.recommended_books),
    path('all/', views.get_all_books),
    path('<int:pk>/', views.recommendedList_detail),
]