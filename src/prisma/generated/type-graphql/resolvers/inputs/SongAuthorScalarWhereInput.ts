import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { DateTimeFilter } from "../inputs/DateTimeFilter";
import { StringFilter } from "../inputs/StringFilter";

@TypeGraphQL.InputType("SongAuthorScalarWhereInput", {
  isAbstract: true
})
export class SongAuthorScalarWhereInput {
  @TypeGraphQL.Field(_type => [SongAuthorScalarWhereInput], {
    nullable: true
  })
  AND?: SongAuthorScalarWhereInput[] | undefined;

  @TypeGraphQL.Field(_type => [SongAuthorScalarWhereInput], {
    nullable: true
  })
  OR?: SongAuthorScalarWhereInput[] | undefined;

  @TypeGraphQL.Field(_type => [SongAuthorScalarWhereInput], {
    nullable: true
  })
  NOT?: SongAuthorScalarWhereInput[] | undefined;

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
}
