from rest_framework.decorators import api_view
from rest_framework.response import Response

from base.models import Convocatorias
from base.serializers import ConvocatoriasSerializer
from rest_framework import status
from datetime import datetime
@api_view(['GET'])
def get_convocatorias_activas(request):
    convocatorias = Convocatorias.objects.filter(is_active=True).order_by('-fecha_de_creacion')
    serializer = ConvocatoriasSerializer(convocatorias, many=True)
    return Response({'Success':True, 'Convocatorias':serializer.data}, status=status.HTTP_200_OK)

@api_view(['GET'])
def get_convocatorias_activas(request):
    convocatorias = Convocatorias.objects.filter(is_active=False).order_by('-fecha_de_creacion')[:10]
    serializer = ConvocatoriasSerializer(convocatorias, many=True)
    return Response({'Success':True, 'Convocatorias':serializer.data}, status=status.HTTP_200_OK)

@api_view(['PUT'])
def desactivar_convocatoria(request,pk):
    convocatoria = Convocatorias.objects.get(id_convocatoria=pk)
    now = datetime.now()
    if(now>convocatoria.fecha_de_cierre):
        convocatoria.is_active = False
    convocatoria.save()

