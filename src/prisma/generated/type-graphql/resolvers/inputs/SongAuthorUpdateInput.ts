import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "../../../type-prisma";
import { DecimalJSScalar } from "../../scalars";
import { AuthorUpdateOneRequiredWithoutSongsNestedInput } from "../inputs/AuthorUpdateOneRequiredWithoutSongsNestedInput";
import { SongUpdateOneRequiredWithoutAuthorsNestedInput } from "../inputs/SongUpdateOneRequiredWithoutAuthorsNestedInput";

@TypeGraphQL.InputType("SongAuthorUpdateInput", {
  isAbstract: true
})
export class SongAuthorUpdateInput {
  @TypeGraphQL.Field(_type => Date, {
    nullable: true
  })
  createdAt?: Date | undefined;

  @TypeGraphQL.Field(_type => AuthorUpdateOneRequiredWithoutSongsNestedInput, {
    nullable: true
  })
  author?: AuthorUpdateOneRequiredWithoutSongsNestedInput | undefined;

  @TypeGraphQL.Field(_type => SongUpdateOneRequiredWithoutAuthorsNestedInput, {
    nullable: true
  })
  song?: SongUpdateOneRequiredWithoutAuthorsNestedInput | undefined;
}
