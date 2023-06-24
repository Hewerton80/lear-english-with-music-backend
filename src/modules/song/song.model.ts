import { Pagination } from '../../common/resolvers/pagination.resolver'
import { Song } from '../../prisma/generated/type-graphql'
import { Field, ObjectType } from 'type-graphql'
// import { Song as PrismaSong } from '../../prisma/generated/type-prisma'
import { Song as PrismaSong } from '@prisma/client'

@ObjectType()
export class PaginedSong extends Pagination {
  @Field(() => [Song], { nullable: false })
  docs: PrismaSong[]
}
