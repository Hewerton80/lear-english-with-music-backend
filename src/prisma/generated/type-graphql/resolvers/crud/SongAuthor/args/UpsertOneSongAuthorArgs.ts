import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { SongAuthorCreateInput } from "../../../inputs/SongAuthorCreateInput";
import { SongAuthorUpdateInput } from "../../../inputs/SongAuthorUpdateInput";
import { SongAuthorWhereUniqueInput } from "../../../inputs/SongAuthorWhereUniqueInput";

@TypeGraphQL.ArgsType()
export class UpsertOneSongAuthorArgs {
  @TypeGraphQL.Field(_type => SongAuthorWhereUniqueInput, {
    nullable: false
  })
  where!: SongAuthorWhereUniqueInput;

  @TypeGraphQL.Field(_type => SongAuthorCreateInput, {
    nullable: false
  })
  create!: SongAuthorCreateInput;

  @TypeGraphQL.Field(_type => SongAuthorUpdateInput, {
    nullable: false
  })
  update!: SongAuthorUpdateInput;
}
