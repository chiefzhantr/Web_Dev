from rest_framework import serializers
from .models import Company

#ser.modelSer
class CompanySerializer(serializers.ModelSerializer):
    class Meta:
        model = Company
        fields = '__all__'

#ser.Ser
class VacancySerializer(serializers.Serializer):
    name = serializers.CharField(max_length=255)
    id = serializers.IntegerField(read_only=True)
    description = serializers.CharField()
    salary = serializers.IntegerField()
    company_id = serializers.IntegerField()