# Generated by Django 2.0.3 on 2018-03-20 12:56

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('studentapp', '0003_auto_20180320_1820'),
    ]

    operations = [
        migrations.AlterField(
            model_name='graph',
            name='id',
            field=models.IntegerField(primary_key=True, serialize=False, unique=True),
        ),
    ]