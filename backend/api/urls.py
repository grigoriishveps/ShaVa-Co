from django.urls import path, include


from api.views import *

app_name = 'news'
urlpatterns = [
    path('id/<int:pk>/', RetrieveUpdateDestroyBookView.as_view(), name='Book')
]