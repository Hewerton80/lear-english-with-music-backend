import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { SongAuthorUpdateWithoutSongInput } from "../inputs/SongAuthorUpdateWithoutSongInput";
import { SongAuthorWhereUniqueInput } from "../inputs/SongAuthorWhereUniqueInput";

@TypeGraphQL.InputType("SongAuthorUpdateWithWhereUniqueWithoutSongInput", {
  isAbstract: true
})
export class SongAuthorUpdateWithWhereUniqueWithoutSongInput {
  @TypeGraphQL.Field(_type => SongAuthorWhereUniqueInput, {
    nullable: false
  })
  where!: SongAuthorWhereUniqueInput;

  @TypeGraphQL.Field(_type => SongAuthorUpdateWithoutSongInput, {
    nullable: false
  })
  data!: SongAuthorUpdateWithoutSongInput;
}
