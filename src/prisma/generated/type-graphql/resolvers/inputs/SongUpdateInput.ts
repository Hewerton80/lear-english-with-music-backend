import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { SongAuthorUpdateManyWithoutSongNestedInput } from "../inputs/SongAuthorUpdateManyWithoutSongNestedInput";

@TypeGraphQL.InputType("SongUpdateInput", {
  isAbstract: true
})
export class SongUpdateInput {
  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  id?: string | undefined;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  title?: string | undefined;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  url?: string | undefined;

  @TypeGraphQL.Field(_type => Date, {
    nullable: true
  })
  createdAt?: Date | undefined;

  @TypeGraphQL.Field(_type => SongAuthorUpdateManyWithoutSongNestedInput, {
    nullable: true
  })
  authors?: SongAuthorUpdateManyWithoutSongNestedInput | undefined;
}
