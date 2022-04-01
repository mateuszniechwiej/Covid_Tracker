# Generated by Django 4.0.3 on 2022-04-01 07:54

from django.db import migrations, models


class Migration(migrations.Migration):

    initial = True

    dependencies = [
    ]

    operations = [
        migrations.CreateModel(
            name='Covid',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('country', models.CharField(max_length=50)),
                ('code', models.CharField(max_length=10)),
                ('total_cases', models.CharField(max_length=50)),
                ('total_deaths', models.CharField(max_length=50)),
                ('total_recorder', models.CharField(max_length=50)),
            ],
        ),
    ]
