from django.db import models


# Create your models here.
from django.db.models import Manager

from authentication.models import Teacher


class SubjectManager(Manager):

    # TODO Logic for subject services. CRUD (See the other examples: authentication/models.py)
    pass

class Subject(models.Model):
    name = models.CharField(max_length=150, default=None, null=False, name="name", verbose_name="Course name")

    isOptional = models.BooleanField(db_column="is_optional", default=False, null=True, editable=False,
                                     verbose_name="Course optionality")

    teacher = models.OneToOneField(Teacher, on_delete=models.DO_NOTHING,primary_key=False, verbose_name="The boss of za subject")
