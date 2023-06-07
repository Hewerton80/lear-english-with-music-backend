import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { SongAuthorUpdateInput } from "../../../inputs/SongAuthorUpdateInput";
import { SongAuthorWhereUniqueInput } from "../../../inputs/SongAuthorWhereUniqueInput";

@TypeGraphQL.ArgsType()
export class UpdateOneSongAuthorArgs {
  @TypeGraphQL.Field(_type => SongAuthorUpdateInput, {
    nullable: false
  })
  data!: SongAuthorUpdateInput;

  @TypeGraphQL.Field(_type => SongAuthorWhereUniqueInput, {
    nullable: false
  })
  where!: SongAuthorWhereUniqueInput;
}
