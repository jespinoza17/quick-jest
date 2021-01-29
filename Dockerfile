FROM node:10.16.3

RUN yarn add webpack
WORKDIR /usr/src/app
COPY . /usr/src/app
COPY package*.json /usr/src/app/
COPY yarn.lock /usr/src/app/

RUN yarn install
EXPOSE 3000

ENTRYPOINT ["node", "./server/server.js"]