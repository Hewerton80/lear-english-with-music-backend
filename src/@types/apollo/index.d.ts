import { PrismaClient } from '@prisma/client'

declare global {
  interface ApolloContext {
    prisma: PrismaClient
  }
}
