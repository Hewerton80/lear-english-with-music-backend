import { PostResolver } from './post/post.resolver'
import { UserResolver } from './user/user.resolver'
import { NonEmptyArray } from 'type-graphql'
export const resolvers = [
  UserResolver,
  PostResolver,
] as unknown as NonEmptyArray<Function>
