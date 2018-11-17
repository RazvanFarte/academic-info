from django.contrib.auth.models import User
from django.db import models
from django.utils.translation import ugettext_lazy as _


class Student(models.Model):
    user = models.OneToOneField(User, on_delete=models.CASCADE, primary_key=True)
    group = models.CharField(max_length=5, null=True, blank=True, verbose_name=_("Group"))


class Teacher(models.Model):
    user = models.OneToOneField(User, on_delete=models.CASCADE, primary_key=True)


class Admin(models.Model):
    user = models.OneToOneField(User, on_delete=models.CASCADE, primary_key=True)
