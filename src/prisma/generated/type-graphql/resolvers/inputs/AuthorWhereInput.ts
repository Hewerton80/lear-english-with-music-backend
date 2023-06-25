import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "../../../type-prisma";
import { DecimalJSScalar } from "../../scalars";
import { DateTimeFilter } from "../inputs/DateTimeFilter";
import { SongAuthorListRelationFilter } from "../inputs/SongAuthorListRelationFilter";
import { StringFilter } from "../inputs/StringFilter";

@TypeGraphQL.InputType("AuthorWhereInput", {
  isAbstract: true
})
export class AuthorWhereInput {
  @TypeGraphQL.Field(_type => [AuthorWhereInput], {
    nullable: true
  })
  AND?: AuthorWhereInput[] | undefined;

  @TypeGraphQL.Field(_type => [AuthorWhereInput], {
    nullable: true
  })
  OR?: AuthorWhereInput[] | undefined;

  @TypeGraphQL.Field(_type => [AuthorWhereInput], {
    nullable: true
  })
  NOT?: AuthorWhereInput[] | undefined;

  @TypeGraphQL.Field(_type => StringFilter, {
    nullable: true
  })
  id?: StringFilter | undefined;

  @TypeGraphQL.Field(_type => StringFilter, {
    nullable: true
  })
  name?: StringFilter | undefined;

  @TypeGraphQL.Field(_type => StringFilter, {
    nullable: true
  })
  slug?: StringFilter | undefined;

  @TypeGraphQL.Field(_type => DateTimeFilter, {
    nullable: true
  })
  createdAt?: DateTimeFilter | undefined;

  @TypeGraphQL.Field(_type => SongAuthorListRelationFilter, {
    nullable: true
  })
  songs?: SongAuthorListRelationFilter | undefined;
}
