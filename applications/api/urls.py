from django.conf.urls import url, include

from rest_framework.routers import DefaultRouter

from .views import ContactFormAPIView
	
router = DefaultRouter()

urlpatterns = [
	url(r'^contact/$', ContactFormAPIView.as_view(), name='contact'),
]

urlpatterns += router.urls
