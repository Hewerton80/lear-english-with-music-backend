import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { AuthorCreateWithoutSongsInput } from "../inputs/AuthorCreateWithoutSongsInput";
import { AuthorWhereUniqueInput } from "../inputs/AuthorWhereUniqueInput";

@TypeGraphQL.InputType("AuthorCreateOrConnectWithoutSongsInput", {
  isAbstract: true
})
export class AuthorCreateOrConnectWithoutSongsInput {
  @TypeGraphQL.Field(_type => AuthorWhereUniqueInput, {
    nullable: false
  })
  where!: AuthorWhereUniqueInput;

  @TypeGraphQL.Field(_type => AuthorCreateWithoutSongsInput, {
    nullable: false
  })
  create!: AuthorCreateWithoutSongsInput;
}
