import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { SongAuthorOrderByWithAggregationInput } from "../../../inputs/SongAuthorOrderByWithAggregationInput";
import { SongAuthorScalarWhereWithAggregatesInput } from "../../../inputs/SongAuthorScalarWhereWithAggregatesInput";
import { SongAuthorWhereInput } from "../../../inputs/SongAuthorWhereInput";
import { SongAuthorScalarFieldEnum } from "../../../../enums/SongAuthorScalarFieldEnum";

@TypeGraphQL.ArgsType()
export class GroupBySongAuthorArgs {
  @TypeGraphQL.Field(_type => SongAuthorWhereInput, {
    nullable: true
  })
  where?: SongAuthorWhereInput | undefined;

  @TypeGraphQL.Field(_type => [SongAuthorOrderByWithAggregationInput], {
    nullable: true
  })
  orderBy?: SongAuthorOrderByWithAggregationInput[] | undefined;

  @TypeGraphQL.Field(_type => [SongAuthorScalarFieldEnum], {
    nullable: false
  })
  by!: Array<"authorId" | "songId" | "createdAt">;

  @TypeGraphQL.Field(_type => SongAuthorScalarWhereWithAggregatesInput, {
    nullable: true
  })
  having?: SongAuthorScalarWhereWithAggregatesInput | undefined;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  take?: number | undefined;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  skip?: number | undefined;
}
