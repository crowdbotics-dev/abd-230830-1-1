# Generated by Django 3.2.20 on 2023-08-31 09:19

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('home', '0003_home_name'),
    ]

    operations = [
        migrations.AddField(
            model_name='home',
            name='gender',
            field=models.CharField(blank=True, max_length=255, null=True),
        ),
    ]
