import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { SongAuthorCreateManyInput } from "../../../inputs/SongAuthorCreateManyInput";

@TypeGraphQL.ArgsType()
export class CreateManySongAuthorArgs {
  @TypeGraphQL.Field(_type => [SongAuthorCreateManyInput], {
    nullable: false
  })
  data!: SongAuthorCreateManyInput[];

  @TypeGraphQL.Field(_type => Boolean, {
    nullable: true
  })
  skipDuplicates?: boolean | undefined;
}
