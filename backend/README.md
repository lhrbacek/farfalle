# Farfalle backend

## Installation

```bash
$ npm install

# following commands in backend file, if dependencies do not work
$ npm install --save @nestjs/passport passport passport-local
$ npm install --save-dev @types/passport-local

$ npm install --save @nestjs/jwt passport-jwt
$ npm install --save-dev @types/passport-jwt

$ npm i cookie-parser
$ npm i -D @types/cookie-parser
```

## Start

```bash
$ npm i
$ npx prisma generate
$ docker compose up -d
```

## Running the app

```bash
# development
$ npm run start

# watch mode
$ npm run start:dev

# production mode
$ npm run start:prod
```

## Test

```bash
# unit tests
$ npm run test

# e2e tests
$ npm run test:e2e

# test coverage
$ npm run test:cov
```

## Database
```bash
# migration
$ npx prisma migrate --name name
$ npx prisma generate

# seeding
$ npx prisma db seed

# studio
$ npx prisma studio

# reset database
$ npx prisma migrate reset

# env
DATABASE_URL="postgresql://postgres:DynoveKoreniJeDynovymKorenimZivota@localhost:5432/farfalle?schema=public"
```

## License

[MIT licensed](LICENSE).
