import * as dotenv from 'dotenv'
import 'reflect-metadata'
import { buildSchema } from 'type-graphql'
import { ApolloServer } from 'apollo-server'
import { resolve } from 'path'
import { PrismaClient } from '@prisma/client'
import { prismaClient } from './prisma/client'
import { UserResolver } from './modules/user/user.resolver'

dotenv.config()
interface Context {
  prisma: PrismaClient
}

async function main() {
  const schema = await buildSchema({
    resolvers: [UserResolver],
    emitSchemaFile: resolve(__dirname, './graphql/generated-schema.graphql'),
    validate: false,
  })
  await prismaClient.$connect()
  const server = new ApolloServer({
    schema,
    context: (): Context => ({ prisma: prismaClient }),
    cors: true,
  })
  const { url } = await server.listen(3001)
  console.log(`🚀 Application is running on: ${url}`)
  console.log(`💻 GraphQL Playground: ${url}graphql`)
}

main().catch(console.error)
