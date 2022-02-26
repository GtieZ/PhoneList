from django.urls import path

from phones.api.views import phone_list_api_view

urlpatterns = [
    path("phones/", phone_list_api_view, name="phone_list")
]