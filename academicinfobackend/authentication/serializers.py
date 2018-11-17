from django.contrib.auth import update_session_auth_hash
from rest_framework import serializers


# for example usage of the login API
from django.contrib.auth.models import User


# for example usage of the login API
class UserSerializer(serializers.ModelSerializer):
    class Meta:
        model = User
        fields = ('username', 'email', "first_name", "last_name")


class AccountSerializer(serializers.ModelSerializer):
    password = serializers.CharField(write_only=True, required=False)
    confirm_password = serializers.CharField(write_only=True, required=False)

    class Meta:
        model = User
        fields = ('id', 'email', 'username', 'created_at', 'updated_at', 'first_name', 'last_name', 'user_type',
                  'faculty', 'password', 'confirm_password', )
        read_only_fields = ('created_at', 'updated_at', )

    def create(self, validated_data):
        return User.objects.create(**validated_data)

    def update(self, instance, validated_data):

        instance.username = validated_data.get('username', instance.username)

        instance.save()
        password = validated_data.get('password', instance.password)
        confirm_password = validated_data.get('confirm_password', instance.confirm_password)

        if password and confirm_password and password == confirm_password:
            instance.set_password(password)
            instance.save()

        update_session_auth_hash(self.context.get('request'), instance)

        return instance
