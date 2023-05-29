import { AuthResolver } from './auth/auth.resolver'
import { PostResolver } from './post/post.resolver'
import { UserResolver } from './user/user.resolver'
import { NonEmptyArray } from 'type-graphql'
export const resolvers = [
  UserResolver,
  PostResolver,
  AuthResolver,
] as unknown as NonEmptyArray<Function>
