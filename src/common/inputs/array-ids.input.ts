import { ArgsType, Field, InputType } from 'type-graphql'
import { IsArray, IsString, ArrayMinSize } from 'class-validator'

@InputType()
export class ArrayIds {
  @Field(() => [String])
  @IsArray({})
  @ArrayMinSize(1, { message: 'Deve conter pelo menos um' })
  values: string[]
}
