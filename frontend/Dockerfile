FROM node:18.2.0-alpine3.14 AS build

WORKDIR /src

COPY package*.json tsconfig.json ./

RUN npm install

COPY . .

RUN npm run build

FROM node:18.2.0-alpine3.14

WORKDIR /app

COPY --from=build /src/build .

EXPOSE 3000

CMD [ "npm", "start:dev" ]