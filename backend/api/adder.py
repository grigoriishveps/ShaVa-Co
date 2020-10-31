import re

from django.apps import apps

from django.conf import settings
import django
from tqdm import tqdm

settings.configure(DATABASES={
    'default': {
        'ENGINE': 'django.db.backends.postgresql',
        'NAME': 'ltc2020',
        'USER': 'django',
        'PASSWORD': 'qwerty',
        'HOST': '127.0.0.1',
        'PORT': '5432',
    }
})
django.setup()
import csv

from backend.api.models import Reader, Catalog, Issue

# with open('reader.csv', newline='') as csvfile:
#    spamreader = csv.reader(csvfile, delimiter=';', quotechar='|')
#    #print(spamreader)
#    for row in tqdm(spamreader):
#        a = row[1].split('-')
#        #print(a)
#        if len(a[0]) < 4:
#            b= a[2]+'-'+a[1]+'-'+a[0]
#        else:
#            b = a[0] + '-' + a[1] + '-' + a[2]
#        Reader.objects.create(reader_id = row[0], birth_day = b.split(' ')[0])


# print(row[0], b.split(' ')[0])

# print(Reader.objects.all())
#with open('no_dup_catalog.csv', newline='', encoding='utf-8') as csvfile:
#    spamreader = csv.reader(csvfile, delimiter=';', quotechar='"')
#    print(spamreader)
#    for row in tqdm(spamreader):
#        # print(a)
#        # if len(a[0]) < 4:
#        #    b= a[2]+'-'+a[1]+'-'+a[0]
#        # else:
#        #    b = a[0] + '-' + a[1] + '-' + a[2]
#        Catalog.objects.create(catalog_id=row[0], author=row[1], name=row[2], city=row[3], publisher=row[4], pub_date=row[5], series=row[6], categories=row[7], lib_cat=row[8], age_qul=row[9])
#        # print(row)


with open('merged_issue.csv', newline='', encoding='utf-8') as csvfile:
    spamreader = csv.reader(csvfile, delimiter=';', quotechar='"')
    print(spamreader)
    for row in tqdm(spamreader):
        # print(a)
        #a = row[2].split('-')
        ##print(a)
        #if len(a[0]) < 4:
        #    b= a[2]+'-'+a[1]+'-'+a[0]
        #else:
        #    b = a[0] + '-' + a[1] + '-' + a[2]
        #c = row[3].split('-')
        #if len(c[0]) < 4:
        #    d = c[2] + '-' + c[1] + '-' + c[0]
        #else:
        #    d = c[0] + '-' + c[1] + '-' + c[2]
        try:
            Issue.objects.create(issue_id=row[0], reader_id=Reader.objects.get(reader_id=row[1]), catalog_id=Catalog.objects.get(catalog_id=row[4]))
        except:
            pass