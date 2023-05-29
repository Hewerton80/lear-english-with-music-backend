import { User } from '../../../prisma/generated/type-graphql'
import { User as PrimasUser } from '@prisma/client'
import { Field, ObjectType } from 'type-graphql'

@ObjectType()
export class AuthLoginResponse {
  @Field(() => String)
  token: string

  @Field(() => User)
  user: Pick<PrimasUser, 'id' | 'email' | 'name' | 'role'>
}
