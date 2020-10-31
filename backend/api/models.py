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



class Events(models.Model):
    class Meta:
        app_label = "api"

    id = models.IntegerField(verbose_name='catalog_id', db_index=True, primary_key=True)
    EventName = models.CharField(verbose_name='event_name', max_length=256, null=True)
    PlaceName = models.CharField(verbose_name='place_name', max_length=64, null=True)
    EventType = models.CharField(verbose_name='event_type', max_length=128, null=True)
    Holiday = models.CharField(verbose_name='holiday', max_length=256, null=True)
    DateStart = models.CharField(verbose_name='date_start', max_length=64, null=True)
    TimeStart = models.CharField(verbose_name='time_start', max_length=64, null=True)
    DateEnd = models.CharField(verbose_name='date_end', max_length=64, null=True)
    TimeEnd = models.CharField(verbose_name='time_end', max_length=64, null=True)
    Description = models.CharField(verbose_name='description', max_length=2048, null=True)
    Online = models.CharField(verbose_name='online', max_length=3, null=True)
    Address = models.CharField(verbose_name='address', max_length=128, null=True)
    Region = models.CharField(verbose_name='region', max_length=128, null=True)
    Disabilities = models.CharField(verbose_name='disabilities', max_length=512, null=True)
    AgeFrom = models.IntegerField(verbose_name='age_from')
    AgeTo = models.IntegerField(verbose_name='age_to')
    ODA = models.BooleanField(verbose_name='oda')
    Hearing = models.BooleanField(verbose_name='hearing')
    Vision = models.BooleanField(verbose_name='vision')
    Wheelchair = models.BooleanField(verbose_name='wheelchair')
