import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { AuthorCreateWithoutSongsInput } from "../inputs/AuthorCreateWithoutSongsInput";
import { AuthorUpdateWithoutSongsInput } from "../inputs/AuthorUpdateWithoutSongsInput";

@TypeGraphQL.InputType("AuthorUpsertWithoutSongsInput", {
  isAbstract: true
})
export class AuthorUpsertWithoutSongsInput {
  @TypeGraphQL.Field(_type => AuthorUpdateWithoutSongsInput, {
    nullable: false
  })
  update!: AuthorUpdateWithoutSongsInput;

  @TypeGraphQL.Field(_type => AuthorCreateWithoutSongsInput, {
    nullable: false
  })
  create!: AuthorCreateWithoutSongsInput;
}
