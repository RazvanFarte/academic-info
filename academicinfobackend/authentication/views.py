import json

import requests
from django.http import HttpResponse
from rest_framework import permissions, viewsets, status
from rest_framework.views import APIView

from authentication.constants import CLIENT_ID, CLIENT_SECRET, TOKEN_URI
from authentication.serializers import AccountSerializer
from rest_framework.response import Response

# for example usage of the login API
from oauth2_provider.contrib.rest_framework import TokenHasScope
from rest_framework import generics
from django.contrib.auth.models import User
from authentication.serializers import UserSerializer


class StudentLoginView(APIView):
    authentication_classes = ()
    permission_classes = ()

    def post(self, request):
        grant_type = request.data.get('grant_type', "password")
        if grant_type == "password":
            body = {
                "grant_type": grant_type,
                "username": request.data.get('username', None),
                "password": request.data.get('password', None),
                "client_id": CLIENT_ID,
                "client_secret": CLIENT_SECRET,
                "scope": "student",
            }
        elif grant_type == "refresh_token":
            body = {
                "grant_type": grant_type,
                "refresh_token": request.data.get('refresh_token', None),
                "client_id": CLIENT_ID,
                "client_secret": CLIENT_SECRET,
            }
        headers = {
            "Content-Type": "application/json",
        }
        result = requests.post(TOKEN_URI, headers=headers, data=json.dumps(body))
        return HttpResponse(result, status=result.status_code, content_type='application/json')


class TeacherLoginView(APIView):
    authentication_classes = ()
    permission_classes = ()

    def post(self, request):
        grant_type = request.data.get('grant_type', "password")
        if grant_type == "password":
            body = {
                "grant_type": grant_type,
                "username": request.data.get('username', None),
                "password": request.data.get('password', None),
                "client_id": CLIENT_ID,
                "client_secret": CLIENT_SECRET,
                "scope": "teacher",
            }
        elif grant_type == "refresh_token":
            body = {
                "grant_type": grant_type,
                "refresh_token": request.data.get('refresh_token', None),
                "client_id": CLIENT_ID,
                "client_secret": CLIENT_SECRET,
            }
        headers = {
            "Content-Type": "application/json",
        }
        result = requests.post(TOKEN_URI, headers=headers, data=json.dumps(body))
        return HttpResponse(result, status=result.status_code, content_type='application/json')


# for example usage of the login API
class UserList(generics.ListAPIView):
    permission_classes = [permissions.IsAuthenticated, TokenHasScope]
    required_scopes = ['teacher']
    queryset = User.objects.all()
    serializer_class = UserSerializer


class AccountViewSet(viewsets.ModelViewSet):
    lookup_field = 'username'
    queryset = User.objects.all()
    serializer_class = AccountSerializer

    def get_permissions(self):
        if self.request.method in permissions.SAFE_METHODS:
            return permissions.AllowAny()

        if self.request.method == 'POST':
            return permissions.AllowAny()

        return permissions.IsAuthenticated(), permissions.IsAccountOwner()

    def create(self, request, *args, **kwargs):
        serializer = self.serializer_class(data=request.data)

        if serializer.is_valid():
            User.objects.create_user(**serializer.validated_data)

            return Response(serializer.validated_data, status=status.HTTP_201_CREATED)

        return Response({
            'status': 'Bad request',
            'message': 'Account could not be created with received data.'
        }, status=status.HTTP_400_BAD_REQUEST)
