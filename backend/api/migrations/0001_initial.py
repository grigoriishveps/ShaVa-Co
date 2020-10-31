# Generated by Django 3.1.2 on 2020-10-30 23:04

from django.db import migrations, models
import django.db.models.deletion


class Migration(migrations.Migration):

    initial = True

    dependencies = [
    ]

    operations = [
        migrations.CreateModel(
            name='Catalog',
            fields=[
                ('catalog_id', models.IntegerField(db_index=True, primary_key=True, serialize=False, verbose_name='catalog_id')),
                ('author', models.CharField(max_length=256, null=True, verbose_name='author')),
                ('name', models.CharField(max_length=256, null=True, verbose_name='name')),
                ('city', models.CharField(max_length=256, null=True, verbose_name='city')),
                ('publisher', models.CharField(max_length=256, null=True, verbose_name='publisher')),
                ('pub_date', models.IntegerField(null=True, verbose_name='pub_date')),
                ('series', models.CharField(max_length=256, null=True, verbose_name='series')),
                ('categories', models.CharField(max_length=256, null=True, verbose_name='categories')),
                ('lib_cat', models.CharField(max_length=256, null=True, verbose_name='lib_cat')),
                ('age_qul', models.IntegerField(null=True, verbose_name='age_qul')),
            ],
        ),
        migrations.CreateModel(
            name='Reader',
            fields=[
                ('reader_id', models.IntegerField(db_index=True, primary_key=True, serialize=False, verbose_name='reader_id')),
                ('birth_day', models.DateField(verbose_name='birth_day')),
            ],
        ),
        migrations.CreateModel(
            name='Issue',
            fields=[
                ('issue_id', models.IntegerField(db_index=True, primary_key=True, serialize=False, verbose_name='issue_id')),
                ('start_date', models.DateField(null=True, verbose_name='start_date')),
                ('end_date', models.DateField(null=True, verbose_name='end_date')),
                ('status', models.IntegerField(null=True, verbose_name='status')),
                ('catalog_id', models.ForeignKey(null=True, on_delete=django.db.models.deletion.CASCADE, to='api.catalog', verbose_name='catalog')),
                ('reader_id', models.ForeignKey(null=True, on_delete=django.db.models.deletion.CASCADE, to='api.reader', verbose_name='reader')),
            ],
        ),
    ]
