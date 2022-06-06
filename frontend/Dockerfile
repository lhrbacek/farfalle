FROM node:18.2.0-alpine3.14 AS build

WORKDIR /src

COPY package*.json tsconfig.json ./

RUN npm install

COPY . .

RUN npm run build

FROM node:18.2.0-alpine3.14

WORKDIR /app

COPY --from=build /src .
# COPY --from=build /src/package*.json /src/tsconfig.json ./

EXPOSE 4000

CMD ["npm", "run", "dev"]