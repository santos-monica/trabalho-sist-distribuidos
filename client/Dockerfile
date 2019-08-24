FROM node:latest
MAINTAINER Mônica Santos
COPY ./client  /front
WORKDIR /front
RUN npm install
ENTRYPOINT npm start
EXPOSE 3000