import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { SongAuthorUpdateManyWithoutAuthorNestedInput } from "../inputs/SongAuthorUpdateManyWithoutAuthorNestedInput";

@TypeGraphQL.InputType("AuthorUpdateInput", {
  isAbstract: true
})
export class AuthorUpdateInput {
  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  id?: string | undefined;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  name?: string | undefined;

  @TypeGraphQL.Field(_type => Date, {
    nullable: true
  })
  createdAt?: Date | undefined;

  @TypeGraphQL.Field(_type => SongAuthorUpdateManyWithoutAuthorNestedInput, {
    nullable: true
  })
  songs?: SongAuthorUpdateManyWithoutAuthorNestedInput | undefined;
}
