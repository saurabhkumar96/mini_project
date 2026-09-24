from django.forms import modelformset_factory
from .models import GeekModel

GeeksModelSet = modelformset_factory(GeekModel,fields=['title','description'])