# Generated by Django 2.2.27 on 2022-02-25 18:11

from django.db import migrations, models


class Migration(migrations.Migration):

    initial = True

    dependencies = [
    ]

    operations = [
        migrations.CreateModel(
            name='Phone',
            fields=[
                ('id', models.AutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('phone', models.CharField(max_length=120)),
                ('details', models.TextField(blank=True, null=True)),
                ('year', models.IntegerField()),
                ('picture', models.ImageField(blank=True, null=True, upload_to='')),
                ('price', models.FloatField()),
            ],
        ),
    ]
