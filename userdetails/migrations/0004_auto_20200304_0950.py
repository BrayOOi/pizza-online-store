# Generated by Django 3.0.2 on 2020-03-04 09:50

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('userdetails', '0003_userprofile_token'),
    ]

    operations = [
        migrations.AlterField(
            model_name='userprofile',
            name='token',
            field=models.CharField(max_length=64),
        ),
    ]
