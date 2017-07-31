from django.views.generic.base import TemplateView
from django.http import HttpResponseBadRequest
from django.views.decorators.csrf import csrf_exempt
from django.utils.decorators import method_decorator
from django.template.loader import render_to_string

from rest_framework.generics import CreateAPIView
from rest_framework.response import Response
from rest_framework.renderers import JSONRenderer
from rest_framework.permissions import AllowAny
from rest_framework.status import HTTP_201_CREATED

from .serializers import ContactFormSerializer
from .email import send_html_email

# Create your views here.

class HtmlView(TemplateView):
	template_name = 'index.html'

	@method_decorator(csrf_exempt)
	def dispatch(self, request, *args, **kwargs):
		if request.is_ajax():
			return HttpResponseBadRequest()
		return super(HtmlView, self).dispatch(request, *args, **kwargs)

class ContactFormAPIView(CreateAPIView):
	serializer_class = ContactFormSerializer
	renderer_classes = (JSONRenderer,)
	email_subject_template = 'email/contact-subject.txt'
	email_body_template = 'email/contact-body.txt'
	permission_classes = (
		AllowAny,
	)

	def post(self, request):
		serializer = self.get_serializer(data=request.data)
		serializer.is_valid(raise_exception=True)
		self.send_email(serializer.data)
		return Response({ 'success': 'Email was sent' }, status=HTTP_201_CREATED)

	def send_email(self, data):
		context = self.get_email_context(data)
		subject = render_to_string(self.email_subject_template, context)
		subject = ''.join(subject.splitlines())
		message = render_to_string(self.email_body_template, context)
		send_html_email(subject, message, 'info@sianoneill.co.uk', 'sianoneilldesign@gmail.com')

	def get_email_context(self, data):
		return data