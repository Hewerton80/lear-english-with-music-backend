import { Pagination } from '../../common/resolvers/pagination.resolver'
import { Post } from '../../prisma/generated/type-graphql'
import { Field, ObjectType } from 'type-graphql'
import { Post as PrismaPost } from '@prisma/client'

@ObjectType()
export class PaginedPost extends Pagination {
  @Field(() => [Post], { nullable: false })
  docs: PrismaPost[]
}
