import { PrismaClient } from '@prisma/client'
import { JwdDto } from 'src/modules/auth/dtos/jwt.dto'
import { ContainerInstance } from 'typedi'

declare global {
  interface ApolloContext {
    prisma: PrismaClient
    container: ContainerInstance
    requestId: number
    loggedUser?: JwdDto
    headerAuthorization?: string
  }
}
