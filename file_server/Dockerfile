FROM nginx:1.21-alpine
RUN apk add openssl


# Make a self-signed cert available in case the config uses SSL
RUN mkdir /cert
COPY ./openssl.conf .
RUN openssl req -x509 -nodes -days 3650 -newkey rsa:2048 -config openssl.conf \
    -keyout /cert/ssl.key -out /cert/ssl.crt

# TODO: Consider baking the full config in the image instead of using compose? ¯\_(ツ)_/¯
