from django.urls import path
from .views import CustomUserCreate, BlacklistTokenUpdateView, MyTokenObtainPairView, NewUserList, UserDetail
from rest_framework_simplejwt.views import TokenRefreshView

urlpatterns = [
    # list users    
    path('list/', NewUserList.as_view(), name="list-user"),
    
    # register
    path('register/', CustomUserCreate.as_view(), name="register-user"),
    
    # delete
    path('edit/', UserDetail.as_view(), name="delete-edit-user"),
    
    # login
    path('login/', MyTokenObtainPairView.as_view(), name="login-user"),
    path('login/refresh/',TokenRefreshView.as_view(), name="login-refresh"),
    
    # logout
    path('logout/blacklist/', BlacklistTokenUpdateView.as_view(), name='logout-user')
]  