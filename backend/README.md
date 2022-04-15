# Farfalle backend

## Installation

```bash
$ npm install
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
