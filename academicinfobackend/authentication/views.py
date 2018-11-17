from rest_framework import permissions, viewsets, status

from authentication.serializers import AccountSerializer
from rest_framework.response import Response

# for example usage of the login API
from oauth2_provider.contrib.rest_framework import TokenHasScope
from rest_framework import generics
from django.contrib.auth.models import User
from authentication.serializers import UserSerializer


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
