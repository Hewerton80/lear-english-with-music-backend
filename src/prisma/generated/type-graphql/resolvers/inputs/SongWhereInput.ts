import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "../../../type-prisma";
import { DecimalJSScalar } from "../../scalars";
import { DateTimeFilter } from "../inputs/DateTimeFilter";
import { SongAuthorListRelationFilter } from "../inputs/SongAuthorListRelationFilter";
import { StringFilter } from "../inputs/StringFilter";
import { StringNullableFilter } from "../inputs/StringNullableFilter";

@TypeGraphQL.InputType("SongWhereInput", {
  isAbstract: true
})
export class SongWhereInput {
  @TypeGraphQL.Field(_type => [SongWhereInput], {
    nullable: true
  })
  AND?: SongWhereInput[] | undefined;

  @TypeGraphQL.Field(_type => [SongWhereInput], {
    nullable: true
  })
  OR?: SongWhereInput[] | undefined;

  @TypeGraphQL.Field(_type => [SongWhereInput], {
    nullable: true
  })
  NOT?: SongWhereInput[] | undefined;

  @TypeGraphQL.Field(_type => StringFilter, {
    nullable: true
  })
  id?: StringFilter | undefined;

  @TypeGraphQL.Field(_type => StringFilter, {
    nullable: true
  })
  title?: StringFilter | undefined;

  @TypeGraphQL.Field(_type => StringFilter, {
    nullable: true
  })
  slug?: StringFilter | undefined;

  @TypeGraphQL.Field(_type => StringFilter, {
    nullable: true
  })
  url?: StringFilter | undefined;

  @TypeGraphQL.Field(_type => StringNullableFilter, {
    nullable: true
  })
  lyric?: StringNullableFilter | undefined;

  @TypeGraphQL.Field(_type => DateTimeFilter, {
    nullable: true
  })
  createdAt?: DateTimeFilter | undefined;

  @TypeGraphQL.Field(_type => SongAuthorListRelationFilter, {
    nullable: true
  })
  authors?: SongAuthorListRelationFilter | undefined;
}
