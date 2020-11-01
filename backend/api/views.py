from django.shortcuts import render

# Create your views here.
from rest_framework import generics
from rest_framework.response import Response

from api.models import Catalog
from api.serializers import BookDetailSerializer


class RetrieveUpdateDestroyBookView(generics.RetrieveUpdateDestroyAPIView):
    serializer_class = BookDetailSerializer


    def retrieve(self, request, *args, **kwargs):
        pk = self.kwargs.get('pk')
        object = Catalog.objects.get(catalog_id=kwargs['pk'])
        serializer = BookDetailSerializer(object)
        print(serializer.data)
        return Response(serializer.data)