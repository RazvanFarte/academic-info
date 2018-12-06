from django.urls import path, include
from authentication.views import AccountViewSet, StudentLoginView, TeacherLoginView
from rest_framework import routers

# for example usage of the login API
from authentication.views import UserList

# router = routers.SimpleRouter()
# router.register(r'accounts', AccountViewSet)

urlpatterns = [
    path('o/', include('oauth2_provider.urls', namespace='oauth2_provider')),
    path('student/', StudentLoginView.as_view()),
    path('teacher/', TeacherLoginView.as_view()),

    # for example usage of the login API
    path('users/', UserList.as_view()),
]
