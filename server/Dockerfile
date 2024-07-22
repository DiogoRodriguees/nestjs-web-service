FROM node:22.2

WORKDIR /app

COPY *package.json .

RUN yarn 

COPY . .

RUN yarn build

EXPOSE 3000

CMD ["yarn", "start:dev"]