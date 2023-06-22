import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "../../../type-prisma";
import { DecimalJSScalar } from "../../scalars";
import { SongAuthorWhereInput } from "../inputs/SongAuthorWhereInput";

@TypeGraphQL.InputType("SongAuthorListRelationFilter", {
  isAbstract: true
})
export class SongAuthorListRelationFilter {
  @TypeGraphQL.Field(_type => SongAuthorWhereInput, {
    nullable: true
  })
  every?: SongAuthorWhereInput | undefined;

  @TypeGraphQL.Field(_type => SongAuthorWhereInput, {
    nullable: true
  })
  some?: SongAuthorWhereInput | undefined;

  @TypeGraphQL.Field(_type => SongAuthorWhereInput, {
    nullable: true
  })
  none?: SongAuthorWhereInput | undefined;
}
