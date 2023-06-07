import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { DateTimeWithAggregatesFilter } from "../inputs/DateTimeWithAggregatesFilter";
import { StringWithAggregatesFilter } from "../inputs/StringWithAggregatesFilter";

@TypeGraphQL.InputType("SongAuthorScalarWhereWithAggregatesInput", {
  isAbstract: true
})
export class SongAuthorScalarWhereWithAggregatesInput {
  @TypeGraphQL.Field(_type => [SongAuthorScalarWhereWithAggregatesInput], {
    nullable: true
  })
  AND?: SongAuthorScalarWhereWithAggregatesInput[] | undefined;

  @TypeGraphQL.Field(_type => [SongAuthorScalarWhereWithAggregatesInput], {
    nullable: true
  })
  OR?: SongAuthorScalarWhereWithAggregatesInput[] | undefined;

  @TypeGraphQL.Field(_type => [SongAuthorScalarWhereWithAggregatesInput], {
    nullable: true
  })
  NOT?: SongAuthorScalarWhereWithAggregatesInput[] | undefined;

  @TypeGraphQL.Field(_type => StringWithAggregatesFilter, {
    nullable: true
  })
  authorId?: StringWithAggregatesFilter | undefined;

  @TypeGraphQL.Field(_type => StringWithAggregatesFilter, {
    nullable: true
  })
  songId?: StringWithAggregatesFilter | undefined;

  @TypeGraphQL.Field(_type => DateTimeWithAggregatesFilter, {
    nullable: true
  })
  createdAt?: DateTimeWithAggregatesFilter | undefined;
}
