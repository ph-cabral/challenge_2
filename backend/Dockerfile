FROM python:alpine
WORKDIR /app
COPY requeriments.txt .
RUN apk update && apk add --no-cache curl nano wget bash
RUN pip install -r requeriments.txt
COPY . .
