from rest_framework.response import Response
from rest_framework.decorators import api_view
from base.models import *
from .serializers import DataSerializer

import os
import pandas as pd
import seaborn as sns
from sklearn.model_selection import train_test_split
from sklearn.linear_model import LogisticRegression
from sklearn.metrics import accuracy_score


@api_view(['GET'])
def getData(request):
   data = Data.objects.all()
   serializer = DataSerializer(data, many=True)
   return Response(serializer.data)

@api_view(['POST'])
def predict(request):
   serializer = DataSerializer(data=request.data)
   # age = request.data.get('age')
   # age *= 2
   # data = pd.read_csv(r'C:\Users\Nitro 5\Downloads\archive\diabetes.csv')
   static_path = os.path.join(os.path.dirname(os.path.dirname(os.path.abspath(__file__))), 'static')
   csv_path = os.path.join(static_path, 'diabetes.csv')
   data = pd.read_csv(csv_path)

   X = data.drop('Outcome', axis=1)
   y = data['Outcome']
   X_train, X_test, y_train, y_test = train_test_split(X, y, test_size=0.2, random_state=0)

   model = LogisticRegression()
   model.fit(X_train, y_train)

   pregnancy = float(request.data.get('pregnancy'))
   glucose = float(request.data.get('glucose'))
   bloodPressure = float(request.data.get('bloodPressure'))
   skinThickness = float(request.data.get('skinThickness'))
   insulin = float(request.data.get('insulin'))
   bmi = float(request.data.get('bmi'))
   diabetesPedigreeFunction = float(request.data.get('diabetesPedigreeFunction'))
   age = float(request.data.get('age'))

   prediction = model.predict([[pregnancy, glucose, bloodPressure, skinThickness, insulin, bmi, diabetesPedigreeFunction, age]])

   if prediction == 1:
      prediction = 'Positive'
   else:
      prediction = 'Negative'

   return Response({"result": prediction})


@api_view(['POST'])
def Register(request):
   serializer = DataSerializer(data=request.data)
   if serializer.is_valid():
      serializer.save()
   return Response(serializer.data)


@api_view(['POST'])
def Login(request):
   email = request.data.get('email')
   password = request.data.get('password')
   user = User.objects.filter(email=email, password=password)
   if user:
      return Response({"result": "Success"})
   else:
      return Response({"result": "Failed"})