## Getting started

```bash
#Install global dependencies
$ npm install -g ts-node prisma nodemon

#Install dependencies
$ npm install

#Pull the schema from an existing database, updating the Prisma schema
$ npm run generate

#Pull the schema from an existing database, updating the Prisma schema
$ npm run push

#The command used to populate the database
$ npm run seed
```

## Running the app

```bash
# development watch mode
$ npm run start:dev

# build
$ npm run build

# production mode
$ npm run start:prod
```

## Prisma CLI

```bash
  #Generate artifacts (e.g. Prisma Client)
  $ prisma generate

  #Browse your data
  $ prisma studio

  #Create migrations from your Prisma schema, apply them to the database, generate artifacts (e.g. Prisma Client)
  $ prisma migrate dev

  #The command used to populate the database
  $ prisma db seed

  #Pull the schema from an existing database, updating the Prisma schema
  $ prisma db pull

  #Push the Prisma schema state to the database
  $ prisma db push

  #Validate your Prisma schema
  $ prisma validate

  #Format your Prisma schema
  $ prisma format

```
