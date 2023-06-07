import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";

@TypeGraphQL.InputType("SongAuthorSongIdAuthorIdCompoundUniqueInput", {
  isAbstract: true
})
export class SongAuthorSongIdAuthorIdCompoundUniqueInput {
  @TypeGraphQL.Field(_type => String, {
    nullable: false
  })
  songId!: string;

  @TypeGraphQL.Field(_type => String, {
    nullable: false
  })
  authorId!: string;
}
