import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { SongUpdateOneRequiredWithoutAuthorsNestedInput } from "../inputs/SongUpdateOneRequiredWithoutAuthorsNestedInput";

@TypeGraphQL.InputType("SongAuthorUpdateWithoutAuthorInput", {
  isAbstract: true
})
export class SongAuthorUpdateWithoutAuthorInput {
  @TypeGraphQL.Field(_type => Date, {
    nullable: true
  })
  createdAt?: Date | undefined;

  @TypeGraphQL.Field(_type => SongUpdateOneRequiredWithoutAuthorsNestedInput, {
    nullable: true
  })
  song?: SongUpdateOneRequiredWithoutAuthorsNestedInput | undefined;
}
