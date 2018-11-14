# Generated by Django 2.1.2 on 2018-11-14 21:29

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('authentication', '0002_student_group'),
    ]

    operations = [
        migrations.AddField(
            model_name='student',
            name='year',
            field=models.PositiveSmallIntegerField(choices=[(1, 'First'), (2, 'Second'), (3, 'Third')], default=1),
        ),
    ]
