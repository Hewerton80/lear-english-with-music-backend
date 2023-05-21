import 'reflect-metadata'
import * as dotenv from 'dotenv'
import { buildSchema, ResolverData } from 'type-graphql'
import { ApolloServer } from '@apollo/server'
import { startStandaloneServer } from '@apollo/server/standalone'
import { resolve } from 'path'
import { prismaClient } from './prisma/client'
import { Container } from 'typedi'
import { resolvers } from './modules'
// import { resolvers } from './prisma/generated/type-graphql'
dotenv.config()

async function bootstrap() {
  await prismaClient.$connect()

  const schema = await buildSchema({
    resolvers,
    emitSchemaFile: resolve(__dirname, './graphql/generated-schema.graphql'),
    validate: false,
    container: ({ context }: ResolverData<ApolloContext>) => context.container,
  })

  const server = new ApolloServer<ApolloContext>({
    schema,
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
    context: async (): Promise<ApolloContext> => {
      const requestId = Math.floor(Math.random() * Number.MAX_SAFE_INTEGER) // uuid-like
      const container = Container.of(requestId.toString()) // get scoped container
      const context: ApolloContext = { requestId, container, prisma: prismaClient } // create our context
      container.set('context', context) // place context or other data in container
      return context
    },

    listen: { port: Number(PORT) },
  })

  console.log(`🚀 Application is running on: ${url}`)
  console.log(`💻 GraphQL Playground: ${url}graphql`)
}

bootstrap().catch(console.error)
