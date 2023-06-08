import { AuthorResolver } from './author/author.resolver'
import { SongResolver } from './song/song.resolver'
import { NonEmptyArray } from 'type-graphql'

export const resolvers = [
  SongResolver,
  AuthorResolver,
] as unknown as NonEmptyArray<Function>
