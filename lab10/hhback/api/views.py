from .serializers import CompanySerializer, VacancySerializer
from rest_framework.views import APIView
from rest_framework.response import Response
from rest_framework.decorators import api_view
# Create your views here.

# #func based views:
@api_view(['GET', 'POST'])
def companies_list(request):
    if request.method == 'GET':
        companies = Company.objects.all()
        serializer = CompanySerializer(companies, many=True)
        return Response(serializer.data)
    elif request.method == "POST":
        serializer = CompanySerializer(data=request.data)
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data)
        return Response(serializer.errors)

@api_view(['PUT', 'DELETE','POST','GET'])
def company(self,request,id):
    try:
        company = Company.objects.get(id=id)
    except Company.DoesNotExist as e:
        return JsonResponse({'error': 'Product not found'}, status=400)
    if request.method == 'GET':
        serializer = CompanySerializer(company, many=False)
        return Response(serializer.data)
    elif request.method == 'PUT':
        company = get_object_or_404(Company, id=id)
        serializer = CompanySerializer(company, data=request.data)
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)
    elif request.method == 'DELETE':
        company = get_object_or_404(Company, id=id)
        company.delete()
        return Response(status=status.HTTP_204_NO_CONTENT)

def vacancies(request):
    vacancies = Vacancy.objects.all()
    serializer = VacancySerializer(vacancies, many=True)
    return Response(serializer.data)

@api_view(['GET', 'POST', 'PUT'])
def company_vacancies(request, id):
    if request.method == "GET":
        vacancies = Vacancy.objects.filter(company_id=id)
        serializer = VacancySerializer(vacancies, many=True)
        return Response(serializer.data)

    elif request.method == "POST":
        serializer = VacancySerializer(data=request.data)
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data)
        return Response(serializer.errors)

from django.shortcuts import render
from django.http import JsonResponse
from django.shortcuts import get_object_or_404
from api.models import Company, Vacancy