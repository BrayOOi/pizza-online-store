# Generated by Django 3.0.2 on 2020-03-05 14:25

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('orders', '0006_auto_20200305_0925'),
    ]

    operations = [
        migrations.AddField(
            model_name='order',
            name='cooked',
            field=models.BooleanField(default=False),
        ),
    ]
