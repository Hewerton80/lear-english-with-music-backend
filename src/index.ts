import 'reflect-metadata'
import * as dotenv from 'dotenv'
import { buildSchema } from 'type-graphql'
import { ApolloServer } from '@apollo/server'
import { startStandaloneServer } from '@apollo/server/standalone'
import { resolve } from 'path'
import { prismaClient } from './prisma/client'
import { Container } from 'typedi'
// import { resolvers } from './modules'
import { resolvers } from './prisma/generated/type-graphql'
dotenv.config()

async function main() {
  await prismaClient.$connect()

  const schema = await buildSchema({
    resolvers,
    emitSchemaFile: resolve(__dirname, './graphql/generated-schema.graphql'),
    validate: false,
    // container: Container,
  })

  const server = new ApolloServer<ApolloContext>({ schema })

  const PORT = process.env.PORT || 3001
  const { url } = await startStandaloneServer(server, {
    context: async () => ({ prisma: prismaClient }),
    listen: { port: Number(PORT) },
  })

  console.log(`🚀 Application is running on: ${url}`)
  console.log(`💻 GraphQL Playground: ${url}graphql`)
}

main().catch(console.error)
