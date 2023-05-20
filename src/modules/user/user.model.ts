import { Pagination } from '../../common/resolvers/pagination.resolver'
import { User } from '../../prisma/generated/type-graphql'
import { Field, ObjectType } from 'type-graphql'
import { User as PrismaUser } from '@prisma/client'

@ObjectType()
export class PaginedUser extends Pagination {
  @Field(() => [User], { nullable: false })
  docs: PrismaUser[]
}
