# Generated by Django 2.0.3 on 2018-03-21 16:12

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('studentapp', '0007_remove_graphs_user'),
    ]

    operations = [
        migrations.CreateModel(
            name='Lists',
            fields=[
                ('id', models.AutoField(primary_key=True, serialize=False, unique=True)),
                ('lD', models.CharField(max_length=550)),
            ],
        ),
    ]