ARG NODE_VERSION=20.11.0
ARG ALPINE_VERSION=3.17.2

FROM node:${NODE_VERSION}-alpine AS node

WORKDIR /src

ADD package.json /src

RUN npm install --silent

ADD . /src

CMD npm start
