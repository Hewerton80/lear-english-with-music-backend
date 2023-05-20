import { ArgsType, Field } from 'type-graphql'

@ArgsType()
export class PaginationArgs {
  @Field(() => Number, { nullable: true })
  currentPage: number

  @Field(() => Number, { nullable: true })
  perPage: number
}
