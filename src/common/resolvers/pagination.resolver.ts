import { GetPaginedDocsParans } from '../../utis/getPaginadDocs'
import { Field, ObjectType } from 'type-graphql'

@ObjectType('Pagination')
export class Pagination<C = any> {
  @Field(() => [String], { nullable: false })
  docs: C[]
  @Field(() => Number, { nullable: false })
  currentPage: number
  @Field(() => Number, { nullable: false })
  perPage: number
  @Field(() => Number, { nullable: false })
  totalDocs: number
}
