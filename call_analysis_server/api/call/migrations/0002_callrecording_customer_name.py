# Generated by Django 4.2.3 on 2023-10-26 15:18

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('call', '0001_initial'),
    ]

    operations = [
        migrations.AddField(
            model_name='callrecording',
            name='customer_name',
            field=models.CharField(default='', max_length=50),
        ),
    ]
