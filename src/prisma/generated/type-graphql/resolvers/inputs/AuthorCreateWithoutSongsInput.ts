import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "../../../type-prisma";
import { DecimalJSScalar } from "../../scalars";

@TypeGraphQL.InputType("AuthorCreateWithoutSongsInput", {
  isAbstract: true
})
export class AuthorCreateWithoutSongsInput {
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
}
