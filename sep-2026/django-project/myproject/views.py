from django.http import HttpResponse
from django.http import JsonResponse
def hello_geeks(request):
    return HttpResponse("data")

def showingList(request):
    arr = ["javascript","python","frontend","backend","problem-solving"]
    return JsonResponse({"data":arr})