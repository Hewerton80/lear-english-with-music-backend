import { PrismaClient, Role } from '@prisma/client'
import Container from 'typedi'
import { getRandomIntInclusive } from './getRandomIntInclusive'
import * as jwt from 'jsonwebtoken'
import { JwdDto } from '../modules/auth/dtos/jwt.dto'

const payload: JwdDto = {
  id: 'tesrte',
  email: 'hewerton80@gmail.com',
  role: Role.CUSTOMER,
}
export const getApolloContext = (prismaClient: PrismaClient) => {
  return async ({ req }): Promise<ApolloContext> => {
    const requestId = getRandomIntInclusive(0, Number.MAX_SAFE_INTEGER) // uuid-like
    const container = Container.of(requestId.toString()) // get scoped container
    const token = jwt.sign({ payload }, process.env.TOKEN_SECRET)
    let decoded
    try {
      decoded = jwt.verify(token, process.env.TOKEN_SECRET + '454')
    } catch (err) {
      // err
    }
    // console.log('decoded', decoded)
    const context: ApolloContext = {
      requestId,
      container,
      prisma: prismaClient,
      headerAuthorization: req.headers.authorization,
    } // create our context
    container.set('context', context) // place context or other data in container
    return context
  }
}
