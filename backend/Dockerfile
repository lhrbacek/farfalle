FROM node:18.2.0-alpine3.14 AS build

WORKDIR /src

COPY package*.json tsconfig.json ./
COPY prisma ./prisma/

RUN npm install
RUN npx prisma generate

COPY . .

RUN npm run build

FROM node:18.2.0-alpine3.14

WORKDIR /api

COPY --from=build /src .

EXPOSE 4000

CMD ["npm", "run", "start:migrate:prod"]