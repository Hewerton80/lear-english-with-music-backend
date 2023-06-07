import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { SongCreateWithoutAuthorsInput } from "../inputs/SongCreateWithoutAuthorsInput";
import { SongUpdateWithoutAuthorsInput } from "../inputs/SongUpdateWithoutAuthorsInput";

@TypeGraphQL.InputType("SongUpsertWithoutAuthorsInput", {
  isAbstract: true
})
export class SongUpsertWithoutAuthorsInput {
  @TypeGraphQL.Field(_type => SongUpdateWithoutAuthorsInput, {
    nullable: false
  })
  update!: SongUpdateWithoutAuthorsInput;

  @TypeGraphQL.Field(_type => SongCreateWithoutAuthorsInput, {
    nullable: false
  })
  create!: SongCreateWithoutAuthorsInput;
}
