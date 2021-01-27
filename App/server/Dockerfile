FROM node:latest

WORKDIR /usr/src/app

COPY package.json yarn.lock ./

RUN yarn

COPY . .

EXPOSE 5000

CMD ["nodemon", "index.js"]