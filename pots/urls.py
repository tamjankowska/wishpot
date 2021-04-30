from django.urls import path, include
from . import views

urlpatterns = [
    path('user/signup/', views.SignupView.as_view(), name='signup'),
    path('dashboard/', views.DashboardView.as_view(), name='dashboard'),
    path('new-list/', views.NewListView.as_view(), name='new-list'),
    path('lists/', views.ListsView.as_view(), name='lists'),
    path('spends/', views.SpendsView.as_view(), name='spends'),
    path('profile/', views.ProfileView.as_view(), name='profile')
]