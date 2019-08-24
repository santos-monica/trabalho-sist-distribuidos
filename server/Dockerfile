FROM node:latest
MAINTAINER Mônica Santos
COPY ./server /back
WORKDIR /back
RUN npm install
ENTRYPOINT ./node_modules/nodemon/bin/nodemon.js app.js
EXPOSE 4000