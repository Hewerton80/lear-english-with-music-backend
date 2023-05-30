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
import * as jwt from 'jsonwebtoken'
import { JwdDto } from './dtos/jwt.dto'
import { AuthLoginResponse } from './object-types/auth-login-response.model'
import { compareSync } from 'bcrypt'
import { HttpStatusCode } from '../../types/enums/httpStatusCode'

@Service()
export class AuthService {
  constructor(private readonly userService: UserService) {}

  private sendExceptionError() {
    throw new GraphQLError(`Credenciais inválidas`, {
      extensions: { code: HttpStatusCode.UNAUTHORIZED },
    })
  }

  async login({ email, password }: LoginCredentialArgs): Promise<AuthLoginResponse> {
    const foundUser = await this.userService.findOne({ where: { email } })
    if (!foundUser) {
      this.sendExceptionError()
    }
    const passwordIsMatch = compareSync(password, foundUser.password)
    if (!passwordIsMatch) {
      this.sendExceptionError()
    }
    const payload: JwdDto = {
      email: foundUser.email,
      id: foundUser.id,
      role: foundUser.role,
    }
    const token = jwt.sign({ payload }, process.env.TOKEN_SECRET)
    return {
      token,
      user: foundUser,
    }
  }
}
