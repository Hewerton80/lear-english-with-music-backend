import { PrismaClient } from '@prisma/client'
import { ContainerInstance } from 'typedi'

declare global {
  interface ApolloContext {
    prisma: PrismaClient
    container: ContainerInstance
    requestId: number
  }
}
