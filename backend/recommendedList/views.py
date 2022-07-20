from django.shortcuts import render
from django.shortcuts import get_object_or_404
from rest_framework import status
from rest_framework.response import Response
from rest_framework.permissions import IsAuthenticated, AllowAny
from rest_framework.decorators import api_view, permission_classes
from .models import recommendedList
from .serializers import recommendedListSerializer


# Create your views here.
@api_view(['GET'])
@permission_classes([AllowAny])
def get_all_books(request):
    books = recommendedList.objects.all()
    serializer = recommendedListSerializer(books, many=True)
    return Response(serializer.data)


@api_view(['GET', 'POST'])
@permission_classes([IsAuthenticated])
def recommended_books(request):
    print(
        'User ', f"{request.user.id} {request.user.email} {request.user.username}")
    if request.method == 'POST':
        serializer = recommendedListSerializer(data=request.data)
        if serializer.is_valid():
            serializer.save(user=request.user)
            return Response(serializer.data, status=status.HTTP_201_CREATED)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)
    elif request.method == 'GET':
        books = recommendedList.objects.filter(user_id=request.user.id)
        serializer = recommendedListSerializer(books, many=True)
        return Response(serializer.data)

@api_view(['GET', 'PUT', 'DELETE'])
@permission_classes([IsAuthenticated])
def recommendedList_detail(request, pk):
    print(
        'User ', f"{request.user.id}")
    books = get_object_or_404(recommendedList, pk=pk)
    if request.method == 'GET':
        serializer = recommendedListSerializer(books);
        return Response(serializer.dtat, status=status.HTTP_200_OK)
    elif request.method == 'PUT':
        serializer = recommendedListSerializer(books, data=request.data)
        serializer.is_valid(raise_exception=True)
        serializer.save(user=request.user)
    elif request.method == 'DELETE':
        books.delete()
        return Response(status=status.HTTP_204_NO_CONTENT)
