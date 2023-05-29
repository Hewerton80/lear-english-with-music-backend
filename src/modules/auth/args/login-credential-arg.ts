import { ArgsType, Field } from 'type-graphql'

@ArgsType()
export class LoginCredentialArgs {
  @Field(() => String)
  email: string

  @Field(() => String)
  password: string
}
