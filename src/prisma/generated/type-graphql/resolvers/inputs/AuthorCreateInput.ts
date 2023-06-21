import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "../../../type-prisma";
import { DecimalJSScalar } from "../../scalars";
import { SongAuthorCreateNestedManyWithoutAuthorInput } from "../inputs/SongAuthorCreateNestedManyWithoutAuthorInput";

@TypeGraphQL.InputType("AuthorCreateInput", {
  isAbstract: true
})
export class AuthorCreateInput {
  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  id?: string | undefined;

  @TypeGraphQL.Field(_type => String, {
    nullable: false
  })
  name!: string;

  @TypeGraphQL.Field(_type => Date, {
    nullable: true
  })
  createdAt?: Date | undefined;

  @TypeGraphQL.Field(_type => SongAuthorCreateNestedManyWithoutAuthorInput, {
    nullable: true
  })
  songs?: SongAuthorCreateNestedManyWithoutAuthorInput | undefined;
}
