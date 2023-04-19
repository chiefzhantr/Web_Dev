from django.urls import path
from . import views

app_name = 'api'
urlpatterns = [
    path('api/companies/', views.companies_list),
    path('api/company', views.company),
#     path('api/vacancies/<int:id>', views.vacancy),
    path('api/companies/<int:id>/vacancies/', views.company_vacancies),
]