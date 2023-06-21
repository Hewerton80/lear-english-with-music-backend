import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { SongAuthorWhereInput } from "../../inputs/SongAuthorWhereInput";

@TypeGraphQL.ArgsType()
export class SongCountAuthorsArgs {
  @TypeGraphQL.Field(_type => SongAuthorWhereInput, {
    nullable: true
  })
  where?: SongAuthorWhereInput | undefined;
}
