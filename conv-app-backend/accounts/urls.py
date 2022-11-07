from django.urls import path
from .views import ListUser, UserDetail


urlpatterns = [
    path('<int:pk>/', UserDetail.as_view()),
    path('', ListUser.as_view()),
]