from os import stat
from re import S
from django.urls import path
from base import views


urlpatterns = [
    # owners
    path('owners/', views.OwnerList.as_view(), name='owners-list'),
    path('owner/<int:pk>', views.OwnerDetail.as_view(), name='owners-details'),
    
    # documentos
    path('documentos/', views.DocumentoList.as_view(), name='documentos-list'),
    path('documentos/create/', views.DocumentoCreate.as_view(), name='documentos-create'),
    path('documentos/update/<int:pk>', views.DocumentoUpdate.as_view(), name='documentos-update'),
    path('documento/<int:pk>', views.DocumentoDetail.as_view(), name='documentos-details'),
    
    #detalles documentos 
    path('detalledocumentos/', views.DetalleDocumentoList.as_view(), name='detalledocumentos-list'),
    path('detalledocumentos/create/', views.DetalleDocumentoCreate.as_view(), name='detalledocumentos-create'),
    path('detalledocumentos/update/<int:pk>', views.DetalleDocumentoUpdate.as_view(), name='detalledocumentos-update'),
    path('detalledocumento/<int:pk>', views.DetalleDocumentoDetail.as_view(), name='detalledocumentos-details'),
]
