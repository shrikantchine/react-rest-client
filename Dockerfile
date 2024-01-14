FROM node:21.5-alpine3.18

run mkdir /react-rest-client &&\
    mkdir /react-rest-client/public &&\
    mkdir /react-rest-client/src

WORKDIR /react-rest-client

COPY public/ /react-rest-client/public
COPY src/ /react-rest-client/src
COPY package.json /react-rest-client/
COPY index.html /react-rest-client/
COPY vite.config.js /react-rest-client/

RUN npm install

CMD ["npm", "run", "dev"]