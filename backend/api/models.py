from django.contrib.auth import get_user_model
from django.db import models


User = get_user_model()



class Reader(models.Model):
    class Meta:
        app_label = "api"

    reader_id = models.IntegerField(verbose_name='reader_id', db_index=True, primary_key=True)
    birth_day = models.DateField(verbose_name='birth_day')
    user_id = models.ForeignKey(User, on_delete=models.CASCADE, null=True)


class Catalog(models.Model):
    class Meta:
        app_label = "api"

    catalog_id = models.IntegerField(verbose_name='catalog_id', db_index=True, primary_key=True)
    author = models.CharField(verbose_name='author', max_length=512, null=True)
    name = models.CharField(verbose_name='name', max_length=512, null=True)
    city = models.CharField(verbose_name='city', max_length=512,  null=True)
    publisher = models.CharField(verbose_name='publisher', max_length=512, null=True)
    pub_date = models.CharField(verbose_name='pub_date', max_length=512, null=True)
    series = models.CharField(verbose_name='series', max_length=512, null=True)
    categories = models.CharField(verbose_name='categories', max_length=512, null=True)
    lib_cat = models.CharField(verbose_name='lib_cat', max_length=512, null=True)
    age_qul = models.CharField(verbose_name='age_qul', max_length=512, null=True)


class Issue(models.Model):
    class Meta:
        app_label = "api"

    issue_id = models.IntegerField(verbose_name='issue_id', db_index=True, primary_key=True)
    reader_id = models.ForeignKey(Reader, verbose_name='reader', on_delete=models.CASCADE, null=True)
    catalog_id = models.ForeignKey(Catalog, verbose_name='catalog', on_delete=models.CASCADE, null=True)
    start_date = models.DateField(verbose_name='start_date', null=True)
    end_date = models.DateField(verbose_name='end_date', null=True)

