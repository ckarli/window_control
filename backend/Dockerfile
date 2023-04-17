FROM python:3.11.2-slim-bullseye
ENV PYTHONUNBUFFERED=1
ENV PYTHONDONTWRITEBYTECODE 1

WORKDIR /backend
COPY requirements.txt /backend/requirements.txt
RUN pip install -r requirements.txt

