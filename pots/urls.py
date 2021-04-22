from django.urls import path
from . import views

urlpatterns = [
    path('signup/', views.SignupView.as_view(), name="signup"),
    path('login/', views.LoginView.as_view(), name="login"),
    path('dashboard/', views.DashboardView.as_view(), name="dashboard")
]