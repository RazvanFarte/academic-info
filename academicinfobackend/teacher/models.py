from django.contrib.auth.models import User
from django.db import models

from student.models import Student


class Teacher(models.Model):
    user = models.OneToOneField(User, on_delete=models.CASCADE)


class Subject(models.Model):
    name = models.CharField(max_length=150, null=False, blank=False, verbose_name="subject_name")

    COMPULSORY = 'compulsory'
    OPTIONAL = 'optional'
    ANOTHER_COMPULSORY_DISCIPLINE = 'another_compulsory_discipline'
    FACULTATIVE = 'facultative'
    # failure = restanta
    FAILURE_COMPULSORY = 'failure_compulsory'
    FAILURE_OPTIONAL = 'failure_optional'
    FAILURE_FACULTATIVE = 'failure_facultative'
    DISCIPLINE_IN_ADVANCE = 'discipline_in_advance'

    OPTIONAL_CHOICES = (
        (COMPULSORY, 'compulsory'),
        (OPTIONAL, 'optional'),
        (ANOTHER_COMPULSORY_DISCIPLINE, 'another_compulsory_discipline'),
        (FACULTATIVE, 'facultative'),
        (FAILURE_COMPULSORY, 'failure_compulsory'),
        (FAILURE_OPTIONAL, 'failure_optional'),
        (FAILURE_FACULTATIVE, 'failure_facultative'),
        (DISCIPLINE_IN_ADVANCE, 'discipline_in_advance'),
    )

    is_optional = models.CharField(max_length=64, choices=OPTIONAL_CHOICES, default=COMPULSORY, editable=False,
                                   verbose_name="subject_is_optional")

    teacher = models.OneToOneField(Teacher, on_delete=models.DO_NOTHING,
                                   verbose_name="subject_teacher")


class Meeting(models.Model):
    LABORATORY = 'laboratory'
    SEMINARY = 'seminary'
    LECTURE = 'lecture'

    KIND_CHOICES = (
        (LABORATORY, 'Laboratory'),
        (SEMINARY, 'Seminary'),
        (LECTURE, 'Lecture'),
    )

    kind = models.CharField(max_length=10,
                            choices=KIND_CHOICES,
                            verbose_name="meeting_type",
                            null=False, editable=False)
    subject = models.OneToOneField(Subject, on_delete=models.DO_NOTHING, null=False,
                                   verbose_name="meeting_subject")
    attendance_required = models.BooleanField(verbose_name="meeting_attendance_required", null=False, default=False)


class Situation(models.Model):
    student = models.OneToOneField(Student, on_delete=models.DO_NOTHING)

    teacher = models.OneToOneField(Teacher, on_delete=models.DO_NOTHING)

    meeting = models.OneToOneField(Meeting, on_delete=models.DO_NOTHING)

    week_number = models.SmallIntegerField(choices=[(i, "Week " + str(i)) for i in range(1, 15)], null=True)

    is_present = models.BooleanField(default=False)
