import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { SongAuthorCreateInput } from "../../../inputs/SongAuthorCreateInput";

@TypeGraphQL.ArgsType()
export class CreateOneSongAuthorArgs {
  @TypeGraphQL.Field(_type => SongAuthorCreateInput, {
    nullable: false
  })
  data!: SongAuthorCreateInput;
}
