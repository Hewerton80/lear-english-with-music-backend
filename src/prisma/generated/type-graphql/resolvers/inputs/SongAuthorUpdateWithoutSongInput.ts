import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "../../../type-prisma";
import { DecimalJSScalar } from "../../scalars";
import { AuthorUpdateOneRequiredWithoutSongsNestedInput } from "../inputs/AuthorUpdateOneRequiredWithoutSongsNestedInput";

@TypeGraphQL.InputType("SongAuthorUpdateWithoutSongInput", {
  isAbstract: true
})
export class SongAuthorUpdateWithoutSongInput {
  @TypeGraphQL.Field(_type => Date, {
    nullable: true
  })
  createdAt?: Date | undefined;

  @TypeGraphQL.Field(_type => AuthorUpdateOneRequiredWithoutSongsNestedInput, {
    nullable: true
  })
  author?: AuthorUpdateOneRequiredWithoutSongsNestedInput | undefined;
}
