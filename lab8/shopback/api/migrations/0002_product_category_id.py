# Generated by Django 4.1.7 on 2023-04-02 10:53

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('api', '0001_initial'),
    ]

    operations = [
        migrations.AddField(
            model_name='product',
            name='category_id',
            field=models.IntegerField(default=1),
            preserve_default=False,
        ),
    ]
