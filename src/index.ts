import 'reflect-metadata'
import * as dotenv from 'dotenv'
import { buildSchema, ResolverData } from 'type-graphql'
import { ApolloServer } from '@apollo/server'
import { startStandaloneServer } from '@apollo/server/standalone'
import { resolve } from 'path'
import { PrismaClient } from './prisma/generated/type-prisma'
// import { PrismaClient } from '@prisma/client'
import { Container } from 'typedi'
import { resolvers } from './modules'
import { apolloFormatError } from './utils/errors'
import { getApolloContext } from './utils/getApolloContext'

// import { resolvers } from './prisma/generated/type-graphql'
dotenv.config()

async function bootstrap() {
  const prismaClient = new PrismaClient()
  await prismaClient.$connect()

  const schema = await buildSchema({
    resolvers,
    emitSchemaFile: resolve(__dirname, './graphql/generated-schema.graphql'),
    container: ({ context }: ResolverData<ApolloContext>) => context.container,
    validate: { forbidUnknownValues: false },
  })

  const server = new ApolloServer<ApolloContext>({
    schema,
    formatError: apolloFormatError,
    // includeStacktraceInErrorResponses: false,

    plugins: [
      {
        requestDidStart: async () => ({
          async willSendResponse({ contextValue }) {
            // remember to dispose the scoped container to prevent memory leaks
            Container.reset(contextValue.requestId.toString())
          },
        }),
      },
    ],
  })

  const PORT = process.env.PORT || 3001
  const { url } = await startStandaloneServer(server, {
    // context: getApolloContext(prismaClient),
    context: getApolloContext(prismaClient),

    listen: { port: Number(PORT) },
  })

  console.log(`🚀 Application is running on: ${url}`)
  console.log(`💻 GraphQL Playground: ${url}graphql`)
}

bootstrap().catch(console.error)
