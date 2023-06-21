import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { SongCreateWithoutAuthorsInput } from "../inputs/SongCreateWithoutAuthorsInput";
import { SongWhereUniqueInput } from "../inputs/SongWhereUniqueInput";

@TypeGraphQL.InputType("SongCreateOrConnectWithoutAuthorsInput", {
  isAbstract: true
})
export class SongCreateOrConnectWithoutAuthorsInput {
  @TypeGraphQL.Field(_type => SongWhereUniqueInput, {
    nullable: false
  })
  where!: SongWhereUniqueInput;

  @TypeGraphQL.Field(_type => SongCreateWithoutAuthorsInput, {
    nullable: false
  })
  create!: SongCreateWithoutAuthorsInput;
}
