import { User } from '@prisma/client'
import { UserService } from '../../modules/user/user.service'
import { AuthCheckerInterface, ResolverData } from 'type-graphql'
import { Inject, Service } from 'typedi'

@Service()
export class AuthChecker implements AuthCheckerInterface<ApolloContext> {
  // inject dependency
  constructor(private readonly userService: UserService) {}

  async check(
    { root, args, context, info }: ResolverData<ApolloContext>,
    roles: string[]
  ) {
    // const users = await this.userService.findMany({})
    console.log({ root })
    console.log({ args })
    console.log({ info })
    // console.log({ root, args, context, info })
    return true
  }
}
