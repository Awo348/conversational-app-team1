from django.urls import path
from .views import ListUser, UserDetail


urlpatterns = [
    path("users/", ListUser.as_view()),
    path("users/<int:pk>/", UserDetail.as_view()),
]
