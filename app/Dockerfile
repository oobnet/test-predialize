FROM node:16-alpine3.11 as angular

WORKDIR /app

COPY . .
RUN npm i --silent
RUN npm run build

FROM httpd:alpine3.15

WORKDIR /usr/local/apache2/htdocs

COPY --from=angular /app/dist/app .

EXPOSE 80