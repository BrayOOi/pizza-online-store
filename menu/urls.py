from django.urls import path

from . import views

urlpatterns = [
    path("api/menu/", views.menu_list)
]
