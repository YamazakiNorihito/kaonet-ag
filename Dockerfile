# https://hub.docker.com/_/node
FROM node:current-alpine3.14

RUN npm install -g @angular/cli@12.2.5

WORKDIR /src

EXPOSE 4200