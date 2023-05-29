import { Inject, Service } from 'typedi'
import {
  FindUniqueUserArgs,
  UserOrderByWithRelationInput,
  UserWhereInput,
  UpdateOneUserArgs,
  UserPostArgs,
} from '../../prisma/generated/type-graphql'
import { PaginationInput } from '../../common/inputs/pagination.inputs'
import { prismaPagination } from '../../helpers/getPrismaPagination'
import { User as PrismaUser, Prisma } from '@prisma/client'
import { LoginCredentialArgs } from './args/login-credential-arg'
import { UserService } from '../user/user.service'
import { GraphQLError } from 'graphql'

@Service()
export class AuthService {
  constructor(private readonly userService: UserService) {}

  private sendExexceptionError() {
    throw new GraphQLError(`Credenciais inválidas`, {
      extensions: { code: 'UNAUTHORIZED' },
    })
  }

  async login({ email, password }: LoginCredentialArgs) {
    const foundUser = await this.userService.findOne({ where: { email } })
    if (!foundUser) {
      this.sendExexceptionError()
    }
  }
}
