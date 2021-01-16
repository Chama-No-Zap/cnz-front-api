FROM node:14

WORKDIR /home/cnz-front-api

COPY package*.json ./

COPY . .