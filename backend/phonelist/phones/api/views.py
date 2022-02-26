from rest_framework import status
from rest_framework.decorators import api_view
from rest_framework.response import Response

from phones.models import Phone
from phones.api.serializers import PhoneSerializer

from django.conf import settings


@api_view(["GET"])
def phone_list_api_view(request):
    if request.method == "GET":
        phones = Phone.objects.all()
        serializer = PhoneSerializer(phones, many=True)
        return Response(serializer.data)