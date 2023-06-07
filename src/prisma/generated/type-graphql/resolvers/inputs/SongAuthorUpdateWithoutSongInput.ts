import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { AuthorUpdateOneRequiredWithoutSongsNestedInput } from "../inputs/AuthorUpdateOneRequiredWithoutSongsNestedInput";
import { DateTimeFieldUpdateOperationsInput } from "../inputs/DateTimeFieldUpdateOperationsInput";

@TypeGraphQL.InputType("SongAuthorUpdateWithoutSongInput", {
  isAbstract: true
})
export class SongAuthorUpdateWithoutSongInput {
  @TypeGraphQL.Field(_type => DateTimeFieldUpdateOperationsInput, {
    nullable: true
  })
  createdAt?: DateTimeFieldUpdateOperationsInput | undefined;

  @TypeGraphQL.Field(_type => AuthorUpdateOneRequiredWithoutSongsNestedInput, {
    nullable: true
  })
  author?: AuthorUpdateOneRequiredWithoutSongsNestedInput | undefined;
}
