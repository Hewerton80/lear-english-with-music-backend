import { Role } from '@prisma/client'
import { UserService } from '../../modules/user/user.service'
import { AuthCheckerInterface, ResolverData } from 'type-graphql'
import { Inject, Service } from 'typedi'
import { getKeyByValue } from '../../utils/getKeyByValue'

@Service()
export class AuthChecker implements AuthCheckerInterface<ApolloContext> {
  // inject dependency
  constructor(
    @Inject('context') private readonly ctx: ApolloContext,
    private readonly userService: UserService
  ) {}

  async check({}: ResolverData<ApolloContext>, roles: Role[] = []) {
    // console.log('roles', roles)
    if (!roles.length) {
      throw new Error(`some Role must be required in 'Authorized' decorator`)
    }
    const someRoleNotExist = roles.some((role) => !getKeyByValue(Role, role))
    if (someRoleNotExist) {
      throw new Error(`Invalid Role. Avaliables Role: ${Object.values(Role).join(', ')}`)
    }
    this.ctx.loggedUser = {
      id: 'tesrte',
      email: 'hewerton80@gmail.com',
      role: Role.CUSTOMER,
    }
    // container.set('context', {
    //   ...this.ctx,
    //   loggedUser: {
    //     id: 'tesrte',
    //     email: 'hewerton80@gmail.com',
    //     role: Role.CUSTOMER,
    //   },
    // })
    // this.ctx.container.set('loggedUser', {
    //   id: 'tesrte',
    //   email: 'hewerton80@gmail.com',
    //   role: Role.CUSTOMER,
    // } as JwdDto)
    // const users = await this.userService.findMany({})
    // throw new GraphQLError('', { extensions: { code: 'Unauthorized' } })
    return true
  }
}
