import { ArgsType, Field, InputType } from 'type-graphql'
import { Max, Min } from 'class-validator'

@InputType()
export class PaginationInput {
  @Field(() => Number, { nullable: true, defaultValue: 1 })
  @Min(1, { message: 'currentPage deve ser no mínimo 1' })
  currentPage: number

  @Min(15, { message: 'perPage deve ser no mínimo 15' })
  @Max(35, { message: 'perPage deve ser no máximo 35' })
  @Field(() => Number, { nullable: true, defaultValue: 25 })
  perPage: number
}
