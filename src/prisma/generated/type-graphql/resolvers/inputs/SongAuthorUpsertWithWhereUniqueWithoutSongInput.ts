import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "../../../type-prisma";
import { DecimalJSScalar } from "../../scalars";
import { SongAuthorCreateWithoutSongInput } from "../inputs/SongAuthorCreateWithoutSongInput";
import { SongAuthorUpdateWithoutSongInput } from "../inputs/SongAuthorUpdateWithoutSongInput";
import { SongAuthorWhereUniqueInput } from "../inputs/SongAuthorWhereUniqueInput";

@TypeGraphQL.InputType("SongAuthorUpsertWithWhereUniqueWithoutSongInput", {
  isAbstract: true
})
export class SongAuthorUpsertWithWhereUniqueWithoutSongInput {
  @TypeGraphQL.Field(_type => SongAuthorWhereUniqueInput, {
    nullable: false
  })
  where!: SongAuthorWhereUniqueInput;

  @TypeGraphQL.Field(_type => SongAuthorUpdateWithoutSongInput, {
    nullable: false
  })
  update!: SongAuthorUpdateWithoutSongInput;

  @TypeGraphQL.Field(_type => SongAuthorCreateWithoutSongInput, {
    nullable: false
  })
  create!: SongAuthorCreateWithoutSongInput;
}
