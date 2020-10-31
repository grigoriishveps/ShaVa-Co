from django.apps import apps


from django.conf import settings
import django
settings.configure(DATABASES = {
    'default': {
        'ENGINE': 'django.db.backends.sqlite3',
        'NAME':  r'D:\ShaVa-Co\backend\db.sqlite3\db.sqlite3',
    }
})
django.setup()
import csv

from backend.api.models import Reader

with open('reader.csv', newline='') as csvfile:
    spamreader = csv.reader(csvfile, delimiter=';', quotechar='|')
    print(spamreader)
    for row in spamreader:
        a = row[1].split('-')
        #print(a)
        if len(a[0]) < 4:
            b= a[2]+'-'+a[1]+'-'+a[0]
        else:
            b = a[0] + '-' + a[1] + '-' + a[2]
        #Reader.objects.create(reader_id = row[0], birth_day = b)
        print(row[0], b.split(' ')[0])

#print(Reader.objects.all())