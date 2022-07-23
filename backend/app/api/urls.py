from django.urls import path, include
from app.api import views

urlpatterns = [
    # path('list/', views.user_list, name='user-list'),  
    # path('<int:pk>',  views.user_detail, name='user-detail'),  
    path('list/', views.user_list.as_view(), name='user-list'),  
    path('<int:pk>',  views.user_detail.as_view(), name='user-detail'),  
]
