from django.contrib import admin
from .models import Company
from .models import Vacancy
# Register your models here.
admin.site.register(Company)
admin.site.register(Vacancy)
