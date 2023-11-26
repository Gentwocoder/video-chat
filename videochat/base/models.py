from django.db import models

# Create your models here.
class RoomMember(models.Model):
    name = models.CharField(max_length=200)
    uid = models.CharField(max_length=300)
    room_name = models.CharField(max_length=300)

    def __str__(self):
        return self.name