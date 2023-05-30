import { User } from '../../prisma/generated/type-graphql'
import { Args, Mutation, Resolver } from 'type-graphql'
import { Service } from 'typedi'
import { AuthLoginResponse } from './object-types/auth-login-response.model'
import { LoginCredentialArgs } from './args/login-credential-arg'
import { AuthService } from './auth.service'

@Service()
@Resolver(User)
export class AuthResolver {
  constructor(private readonly authService: AuthService) {}

  @Mutation(() => AuthLoginResponse)
  login(@Args() loginCredentialArgs?: LoginCredentialArgs) {
    return this.authService.login(loginCredentialArgs)
  }
}
