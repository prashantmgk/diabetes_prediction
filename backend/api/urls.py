from django.urls import path
from . import views

urlpatterns = [
   path('', views.getData),
   path('predict/', views.predict),

   path('register/', views.Register),
   path('login/', views.Login),
]