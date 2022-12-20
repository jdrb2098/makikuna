from django.db import models
from django.contrib.auth.models import AbstractUser
import uuid
# Create your models here.

class User(AbstractUser):
    is_developer = models.BooleanField(default=False)
    is_lead_developer = models.BooleanField(default=False)

class Convocatorias(models.Model):
    id_convocatoria = models.AutoField(primary_key=True, editable=False)
    nombre = models.CharField(max_length=50, null=True, blank=True)
    descripcion = models.CharField(max_length=50, null=True, blank=True)
    fecha_de_inicio= models.DateTimeField()
    fecha_de_cierre= models.DateTimeField()
    is_active = models.BooleanField(default=True)
    fecha_de_creacion=models.DateTimeField(auto_now_add=True)
    file = models.FileField()

    def __str__(self):
        return self.nombre

class Post(models.Model):
    user = models.ForeignKey(User, null=True, on_delete=models.SET_NULL)
    title = models.CharField(max_length=50, null=True, blank=True)
    description = models.CharField(max_length=400, null=True, blank=True)
    body= models.TextField()
    created_at = models.DateTimeField(auto_now_add=True)
    updated_at = models.DateTimeField(auto_now=True)
    fecha_post = models.DateTimeField()
    image = models.ImageField(default='default.svg')
    tags = models.ManyToManyField('Tag', blank=True)
    _id = models.AutoField(primary_key=True, editable=False)

    def __str__(self):
        return self.title




class Review(models.Model):
    post = models.ForeignKey(Post, on_delete=models.SET_NULL, null=True)
    user = models.ForeignKey(User, on_delete=models.SET_NULL, null=True)
    name = models.CharField(max_length=200, null=True, blank=True)
    comment = models.TextField(null=True, blank=True)
    createdAt = models.DateTimeField(auto_now_add=True)
    _id = models.AutoField(primary_key=True, editable=False)

    def __str__(self):
        return str(self.createdAt)

class Tag(models.Model):
    name = models.CharField(max_length=200)
    created = models.DateTimeField(auto_now_add=True)
    _id = models.AutoField(primary_key=True, editable=False)

    def __str__(self):
        return self.name

