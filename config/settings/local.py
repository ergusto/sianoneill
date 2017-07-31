import os
from .base import *

DEBUG = True

SECRET_KEY = "5)w*7*6470jrqbmm!qgrl@al4y0cjwk0h5$ti8i!50o52vc2bi"

# Allow all host headers
ALLOWED_HOSTS = ['*']

# Database
# https://docs.djangoproject.com/en/1.11/ref/settings/#databases

DATABASES = {
    "default": {
        "ENGINE": "django.db.backends.postgresql_psycopg2",
        "NAME": "sianoneill",
        "USER": "",
        "PASSWORD": "",
        "HOST": "localhost",
        "PORT": "5432",
     }
}

# django-webpack-loader

WEBPACK_LOADER = {
        'DEFAULT': {
            'BUNDLE_DIR_NAME': 'build/',
            'STATS_FILE': os.path.join(PROJECT_DIR, 'client/webpack/stats.local.json'),
        }
}

EMAIL_BACKEND = 'django.core.mail.backends.console.EmailBackend'