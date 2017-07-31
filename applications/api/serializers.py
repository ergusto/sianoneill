from rest_framework.serializers import Serializer, ModelSerializer, CharField, EmailField, DateField

class ContactFormSerializer(Serializer):
	name = CharField()
	email = EmailField()
	message = CharField()