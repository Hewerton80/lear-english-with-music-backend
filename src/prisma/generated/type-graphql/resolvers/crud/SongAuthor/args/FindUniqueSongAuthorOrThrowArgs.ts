import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { SongAuthorWhereUniqueInput } from "../../../inputs/SongAuthorWhereUniqueInput";

@TypeGraphQL.ArgsType()
export class FindUniqueSongAuthorOrThrowArgs {
  @TypeGraphQL.Field(_type => SongAuthorWhereUniqueInput, {
    nullable: false
  })
  where!: SongAuthorWhereUniqueInput;
}
