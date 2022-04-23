FROM python:3.9.7-buster

WORKDIR /application

#ENV PYTHONDONTWRITEBYTECODE 1
#ENV PYTHONUNBUFFERED 1

COPY ./requirements.txt /application/requirements.txt

RUN pip install -r requirements.txt

CMD gunicorn --bind 0.0.0.0:9090 app:app
