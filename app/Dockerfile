FROM node:19.5.0-alpine as n

WORKDIR /usr/local/app

COPY ./ /usr/local/app

RUN npm i --silent

RUN npm run build

FROM nginx:latest

COPY --from=n /usr/local/app/dist/app /usr/share/nginx/html

EXPOSE 80

CMD [ "npm", "start"]

