import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "../../../type-prisma";
import { DecimalJSScalar } from "../../scalars";
import { SongAuthorSongIdAuthorIdCompoundUniqueInput } from "../inputs/SongAuthorSongIdAuthorIdCompoundUniqueInput";

@TypeGraphQL.InputType("SongAuthorWhereUniqueInput", {
  isAbstract: true
})
export class SongAuthorWhereUniqueInput {
  @TypeGraphQL.Field(_type => SongAuthorSongIdAuthorIdCompoundUniqueInput, {
    nullable: true
  })
  songId_authorId?: SongAuthorSongIdAuthorIdCompoundUniqueInput | undefined;
}
