import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { AuthorRelationFilter } from "../inputs/AuthorRelationFilter";
import { DateTimeFilter } from "../inputs/DateTimeFilter";
import { SongRelationFilter } from "../inputs/SongRelationFilter";
import { StringFilter } from "../inputs/StringFilter";

@TypeGraphQL.InputType("SongAuthorWhereInput", {
  isAbstract: true
})
export class SongAuthorWhereInput {
  @TypeGraphQL.Field(_type => [SongAuthorWhereInput], {
    nullable: true
  })
  AND?: SongAuthorWhereInput[] | undefined;

  @TypeGraphQL.Field(_type => [SongAuthorWhereInput], {
    nullable: true
  })
  OR?: SongAuthorWhereInput[] | undefined;

  @TypeGraphQL.Field(_type => [SongAuthorWhereInput], {
    nullable: true
  })
  NOT?: SongAuthorWhereInput[] | undefined;

  @TypeGraphQL.Field(_type => StringFilter, {
    nullable: true
  })
  authorId?: StringFilter | undefined;

  @TypeGraphQL.Field(_type => StringFilter, {
    nullable: true
  })
  songId?: StringFilter | undefined;

  @TypeGraphQL.Field(_type => DateTimeFilter, {
    nullable: true
  })
  createdAt?: DateTimeFilter | undefined;

  @TypeGraphQL.Field(_type => AuthorRelationFilter, {
    nullable: true
  })
  author?: AuthorRelationFilter | undefined;

  @TypeGraphQL.Field(_type => SongRelationFilter, {
    nullable: true
  })
  song?: SongRelationFilter | undefined;
}
