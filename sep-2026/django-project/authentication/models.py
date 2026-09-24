from django.db import models
from django.contrib.auth.models import User

class GeekModel(models.Model):
    title = models.CharField(max_length=200)
    description = models.TextField()
    avatar = models.ImageField(upload_to='avatars/',default=None)
    landcreated = models.TimeField(auto_now=True)
    

    def __str__(self):
        return self.avatar.name