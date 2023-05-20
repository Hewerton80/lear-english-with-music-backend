import { Field, ObjectType } from 'type-graphql'

@ObjectType('Pagination', { isAbstract: true })
export class Pagination {
  @Field(() => Number, { nullable: false })
  currentPage: number

  @Field(() => Number, { nullable: false })
  perPage: number

  @Field(() => Number, { nullable: false })
  total: number

  @Field(() => Number, { nullable: false })
  lastPage: number

  @Field(() => Number, { nullable: true })
  next: number

  @Field(() => Number, { nullable: true })
  prev: number
}
