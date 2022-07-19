
from django.urls import path
from readers import views

urlpatterns = [
    path('', views.user_readers),
    path('all/', views.get_all_readers),
    path('<int:pk>/', views.reader_detail),
]