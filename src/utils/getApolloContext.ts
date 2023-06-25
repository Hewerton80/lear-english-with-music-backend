import { PrismaClient } from '../prisma/generated/type-prisma'
// import { PrismaClient } from '@prisma/client'
import Container from 'typedi'
import { getRandomIntInclusive } from './getRandomIntInclusive'

export const getApolloContext = (prismaClient: PrismaClient) => {
  return async ({ req }): Promise<ApolloContext> => {
    const requestId = getRandomIntInclusive(0, Number.MAX_SAFE_INTEGER) // uuid-like
    const container = Container.of(requestId.toString()) // get scoped container

    // console.log('decoded', decoded)
    const context: ApolloContext = {
      requestId,
      container,
      prisma: prismaClient,
      headerAuthorization: req.headers?.authorization,
    } // create our context
    container.set('context', context) // place context or other data in container
    return context
  }
}
