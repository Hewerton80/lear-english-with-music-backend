import { Pagination } from '../../common/resolvers/pagination.resolver'
import { Author } from '../../prisma/generated/type-graphql'
import { Field, ObjectType } from 'type-graphql'
import { Author as PrismaAuthor } from '../../prisma/generated/type-prisma'
// import { Author as PrismaAuthor } from '@prisma/client'

@ObjectType()
export class PaginedAuthor extends Pagination {
  @Field(() => [Author], { nullable: false })
  docs: PrismaAuthor[]
}
