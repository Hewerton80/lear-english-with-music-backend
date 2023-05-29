import { User } from '../../prisma/generated/type-graphql'
import { Args, Mutation, Resolver } from 'type-graphql'
import { Service } from 'typedi'
import { AuthLoginResponse } from './object-types/auth-login-response.model'
import { LoginCredentialArgs } from './args/login-credential-arg'
import { AuthService } from './auth-service'

@Service()
@Resolver(User)
export class AuthResolver {
  constructor(private readonly authService: AuthService) {}

  @Mutation(
    // () => AuthLoginResponse
    () => String
  )
  login(@Args() loginCredentialArgs?: LoginCredentialArgs) {
    console.log('tzse')
    return this.authService.login(loginCredentialArgs)
  }
}
