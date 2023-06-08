import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { DateTimeWithAggregatesFilter } from "../inputs/DateTimeWithAggregatesFilter";
import { StringWithAggregatesFilter } from "../inputs/StringWithAggregatesFilter";

@TypeGraphQL.InputType("SongScalarWhereWithAggregatesInput", {
  isAbstract: true
})
export class SongScalarWhereWithAggregatesInput {
  @TypeGraphQL.Field(_type => [SongScalarWhereWithAggregatesInput], {
    nullable: true
  })
  AND?: SongScalarWhereWithAggregatesInput[] | undefined;

  @TypeGraphQL.Field(_type => [SongScalarWhereWithAggregatesInput], {
    nullable: true
  })
  OR?: SongScalarWhereWithAggregatesInput[] | undefined;

  @TypeGraphQL.Field(_type => [SongScalarWhereWithAggregatesInput], {
    nullable: true
  })
  NOT?: SongScalarWhereWithAggregatesInput[] | undefined;

  @TypeGraphQL.Field(_type => StringWithAggregatesFilter, {
    nullable: true
  })
  id?: StringWithAggregatesFilter | undefined;

  @TypeGraphQL.Field(_type => StringWithAggregatesFilter, {
    nullable: true
  })
  title?: StringWithAggregatesFilter | undefined;

  @TypeGraphQL.Field(_type => StringWithAggregatesFilter, {
    nullable: true
  })
  slug?: StringWithAggregatesFilter | undefined;

  @TypeGraphQL.Field(_type => StringWithAggregatesFilter, {
    nullable: true
  })
  url?: StringWithAggregatesFilter | undefined;

  @TypeGraphQL.Field(_type => DateTimeWithAggregatesFilter, {
    nullable: true
  })
  createdAt?: DateTimeWithAggregatesFilter | undefined;
}
