# Generated by Django 2.0.3 on 2018-03-20 12:50

from django.conf import settings
from django.db import migrations, models
import django.db.models.deletion


class Migration(migrations.Migration):

    dependencies = [
        migrations.swappable_dependency(settings.AUTH_USER_MODEL),
        ('studentapp', '0002_auto_20180320_0513'),
    ]

    operations = [
        migrations.CreateModel(
            name='Graph',
            fields=[
                ('id', models.AutoField(primary_key=True, serialize=False, unique=True)),
                ('gD', models.CharField(max_length=550)),
            ],
        ),
        migrations.CreateModel(
            name='UserGraphs',
            fields=[
                ('id', models.AutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('graph', models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, to='studentapp.Graph')),
                ('user', models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, to=settings.AUTH_USER_MODEL)),
            ],
        ),
        migrations.DeleteModel(
            name='Graphs',
        ),
    ]