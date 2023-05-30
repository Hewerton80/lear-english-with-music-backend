import { Role } from '@prisma/client'
import { UserService } from '../../modules/user/user.service'
import { AuthCheckerInterface, ResolverData } from 'type-graphql'
import { Inject, Service } from 'typedi'
import { getKeyByValue } from '../../utils/getKeyByValue'
import * as jwt from 'jsonwebtoken'
import { JwdDto } from '../../modules/auth/dtos/jwt.dto'
import { GraphQLError } from 'graphql'
import { HttpStatusCode } from '../../types/enums/httpStatusCode'

const payload: JwdDto = {
  id: 'tesrte',
  email: 'hewerton80@gmail.com',
  role: Role.CUSTOMER,
}

@Service()
export class AuthChecker implements AuthCheckerInterface<ApolloContext> {
  // inject dependency
  constructor(@Inject('context') private readonly ctx: ApolloContext) {}

  private checkAuthorizationHeaderFormattingAndReturnToken(
    headerAuthorization: string | undefined
  ) {
    if (!headerAuthorization) {
      throw new GraphQLError('token not provided', {
        extensions: { code: HttpStatusCode.UNAUTHORIZED },
      })
    }
    const parts = headerAuthorization.split(' ')
    if (parts.length !== 2) {
      throw new GraphQLError('badly formatted token', {
        extensions: { code: HttpStatusCode.UNAUTHORIZED },
      })
    }

    const [scheme, token] = parts

    if (!/^Bearer$/i.test(scheme)) {
      throw new GraphQLError('badly formatted token', {
        extensions: { code: HttpStatusCode.UNAUTHORIZED },
      })
    }
    return token
  }

  async check({}: ResolverData<ApolloContext>, roles: Role[] = []) {
    // console.log('roles', roles)
    // if (!roles.length) {
    //   throw new Error(`some Role must be required in 'Authorized' decorator`)
    // }
    const someRoleNotExist = roles.some((role) => !getKeyByValue(Role, role))
    if (someRoleNotExist) {
      throw new GraphQLError(
        `Invalid Role. Avaliables Role: ${Object.values(Role).join(', ')}`
      )
    }
    const headerAuthorization = this.ctx?.headerAuthorization
    const token =
      this.checkAuthorizationHeaderFormattingAndReturnToken(headerAuthorization)

    // const token = jwt.sign({ payload }, process.env.TOKEN_SECRET)
    let decoded: { payload: JwdDto } | undefined = undefined
    try {
      decoded = jwt.verify(token, process.env.TOKEN_SECRET) as { payload: JwdDto }
    } catch (err) {
      throw new GraphQLError('token not provided', {
        extensions: { code: HttpStatusCode.UNAUTHORIZED },
      })
    }
    this.ctx.loggedUser = decoded?.payload
    return true
  }
}
