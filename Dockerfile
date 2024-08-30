
# 1 Build
FROM node:18-alpine as builder
WORKDIR /app

COPY package*.json ./
RUN npm install
COPY . .
EXPOSE 4200
CMD ["npm","start"]