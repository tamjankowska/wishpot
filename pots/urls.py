from django.urls import path, include
from . import views

urlpatterns = [
    path('user/signup/', views.SignupView.as_view(), name="signup"),
    path('dashboard/', views.DashboardView.as_view(), name="dashboard")
]