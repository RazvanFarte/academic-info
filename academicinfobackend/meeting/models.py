from django.db import models

# Create your models here.
from authentication.models import Student, Teacher
from subject.models import Subject


class MeetingManager(models.Manager):
    pass  # TODO Implement service level for Meeting


class SituationManager(models.Manager):
    pass  # TODO Implement service level for Situation


class Meeting(models.Model):
    type = models.CharField(max_length=10, choices=(("Laboratory", "LABORATORY"), ("Seminary", "SEMINARY"), ("Lecture", "LECTURE")),
                            verbose_name="The different possible values for a meeting",
                            null=False, editable=False)

    subject = models.OneToOneField(Subject, on_delete=models.DO_NOTHING, null=False,
                                   verbose_name="This meeting is a meeting for the subject..")

    attendenceRequired = models.BooleanField(verbose_name="Is attendence mandatory?", null=False, default=False)
    

class Situation(models.Model):
    student = models.OneToOneField(Student, on_delete=models.DO_NOTHING)

    teacher = models.OneToOneField(Teacher, on_delete=models.DO_NOTHING)

    meeting = models.OneToOneField(Meeting, on_delete=models.DO_NOTHING)

    weekNumber = models.SmallIntegerField(choices=[(i, "Week " + str(i)) for i in range(15)], null=True)

    isPresent = models.BooleanField(null=True, editable=True)

    grade = models.BooleanField(null=True, editable=True)
