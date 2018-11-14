from django.contrib.auth.base_user import AbstractBaseUser, BaseUserManager
from django.db import models
from django.utils.translation import ugettext_lazy as _


class AccountManager(BaseUserManager):

    def create_user(self, email, password=None, **kwargs):
        if not email:
            # TODO: more validations should be added here or in the form
            raise ValueError('User must have a valid email address')

        if not kwargs.get('username'):
            raise ValueError('User must have a valid username')

        account = self.model(
            email=self.normalize_email(email),
            username=kwargs.get('username'),
        )
        account.set_password(password)
        account.save()

        return account

    def create_superuser(self, email, password, **kwargs):
        account = self.create_user(email, password, **kwargs)

        account.is_admin = True
        account.save()

        return account


class Account(AbstractBaseUser):

    MATHEMATICS_COMPUTER_SCIENCE = "MATHEMATICS_COMPUTER_SCIENCE"
    FACULTY = (
        (MATHEMATICS_COMPUTER_SCIENCE, _("Faculty of mathematics and computer science")),

    )
    USER_TYPE_CHOICES = (
        (1, _("Student")),
        (2, _("Teacher")),
        (3, _("Administrator")),
    )

    username = models.CharField(unique=True, max_length=40, verbose_name=_("Username"))
    email = models.EmailField(unique=True, verbose_name=_("Email"), max_length=40)

    first_name = models.CharField(max_length=40, blank=True, null=True, verbose_name=_("First Name"))
    last_name = models.CharField(max_length=40, blank=True, null=True, verbose_name=_("Last Name"))

    user_type = models.PositiveSmallIntegerField(choices=USER_TYPE_CHOICES, default=None, null=True, blank=True)
    faculty = models.CharField(choices=FACULTY, default=MATHEMATICS_COMPUTER_SCIENCE, null=True, blank=True,
                               max_length=150)

    created_at = models.DateTimeField(auto_now_add=True)
    updated_at = models.DateTimeField(auto_now=True)

    USERNAME_FIELD = 'email'
    REQUIRED_FIELDS = ['username']

    objects = AccountManager()

    def __unicode__(self):
        return self.email
    def get_full_name(self):
        return ' '.join(['self.first_name, self.last_name'])

    def get_short_name(self):
        return self.first_name


class Student(models.Model):
    user = models.OneToOneField(Account, on_delete=models.CASCADE, primary_key=True)
    group = models.CharField(max_length=5, null=True, blank=True, verbose_name=_("Group"))


class Teacher(models.Model):
    user = models.OneToOneField(Account, on_delete=models.CASCADE, primary_key=True)


class Admin(models.Model):
    user = models.OneToOneField(Account, on_delete=models.CASCADE, primary_key=True)
