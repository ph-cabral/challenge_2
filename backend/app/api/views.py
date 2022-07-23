# from rest_framework import response, decorators, status
from rest_framework import response, views, status
from app import models
from app.api import serializers


class user_list(views.APIView):

    def get(self, request):
        user = models.User.objects.all()
        serializer = serializers.UserSerializer(user, many=True)
        return response.Response(serializer.data)

    def post(self, request):
        serializer = serializers.UserSerializer(data=request.data)
        if serializer.is_valid():
            serializer.save()
            return response.Response(serializer.data)
        else:
            return response.Response(serializer.errors)


class user_detail(views.APIView):

    def get(self, request, pk):
        try:
            user = models.User.objects.get(pk=pk)
        except models.User.DoesNotExist:
            return response.Response({'error': 'user does not exist'}, status=status.HTTP_400_BAD_REQUEST)

        serializer = serializers.UserSerializer(user)
        return response.Response(serializer.data)

    def put(self, request, pk):
        user = models.User.objects.get(pk=pk)
        serializer = serializers.UserSerializer(user, data=request.data)
        if serializer.is_valid():
            serializer.save()
            return response.Response(serializer.data)

    def delete(self, request, pk):
        user = models.User.objects.get(pk=pk)
        user.delete()
        return response.Response(status=status.HTTP_204_NO_CONTENT)

        #####################################

        # @decorators.api_view(['GET', 'POST'])
        # def user_list(request):
        #     if request.method == 'GET':
        #         users = models.User.objects.all()
        #         serializer = serializers.UserSerializer(users, many=True)
        #         return response.Response(serializer.data)

        #     if request.method == 'POST':
        #         serializer = serializers.UserSerializer(data=request.data)
        #         if serializer.is_valid():
        #             serializer.save()
        #             return response.Response(serializer.data)
        #         else:
        #             return response.Response(serializer.error)

        # @decorators.api_view(['GET', 'PUT', 'DELETE'])

        # def user_detail(request, pk):
        #     if request.method == 'GET':
        #         try:
        #             user = models.User.objects.get(pk=pk)
        #         except models.User.DoesNotExist:
        #             return response.Response({'errror': 'el objeto ha sido eliminado'}, status=status.HTTP_400_BAD_REQUEST)

        #         serializer = serializers.UserSerializer(user)
        #         return response.Response(serializer.data)

        #     if request.method == 'PUT':
        #         user = models.User.objects.get(pk=pk)
        #         serializer = serializers.UserSerializer(user, data=request.data)
        #         if serializer.is_valid():
        #             serializer.save()
        #             return response.Response(serializer.data)
        #         else:
        #             return response.Response(serializer.error, status=status.HTTP_400_BAD_REQUEST)

        #     if request.method == 'DELETE':
        #         user = models.User.objects.get(pk=pk)
        #         user.delete()
        #         return response.Response(status=status.HTTP_204_NO_CONTENT)
