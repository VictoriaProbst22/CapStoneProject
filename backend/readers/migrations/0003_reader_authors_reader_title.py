# Generated by Django 4.0.6 on 2022-07-18 15:28

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('readers', '0002_rename_readers_reader'),
    ]

    operations = [
        migrations.AddField(
            model_name='reader',
            name='authors',
            field=models.CharField(default='default', max_length=225),
            preserve_default=False,
        ),
        migrations.AddField(
            model_name='reader',
            name='title',
            field=models.CharField(default='default', max_length=225),
            preserve_default=False,
        ),
    ]
