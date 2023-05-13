## Getting started

```bash
#Install dependencies
$ yarn install

#Generate artifacts (e.g. Prisma Client)
$ yarn generate
```

## Running the app

```bash
# development watch mode
$ yarn start:dev

# build
$ yarn build

# production mode
$ yarn run start:prod
```

## Prisma CLI

```bash
  #Generate artifacts (e.g. Prisma Client)
  $ prisma generate

  #Browse your data
  $ prisma studio

  #Create migrations from your Prisma schema, apply them to the database, generate artifacts (e.g. Prisma Client)
  $ prisma migrate dev

  #Pull the schema from an existing database, updating the Prisma schema
  $ prisma db pull

  #Push the Prisma schema state to the database
  $ prisma db push

  #Validate your Prisma schema
  $ prisma validate

  #Format your Prisma schema
  $ prisma format
```
