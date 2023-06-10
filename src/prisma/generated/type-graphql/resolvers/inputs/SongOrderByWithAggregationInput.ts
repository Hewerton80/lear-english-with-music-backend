import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { SongCountOrderByAggregateInput } from "../inputs/SongCountOrderByAggregateInput";
import { SongMaxOrderByAggregateInput } from "../inputs/SongMaxOrderByAggregateInput";
import { SongMinOrderByAggregateInput } from "../inputs/SongMinOrderByAggregateInput";
import { SortOrder } from "../../enums/SortOrder";

@TypeGraphQL.InputType("SongOrderByWithAggregationInput", {
  isAbstract: true
})
export class SongOrderByWithAggregationInput {
  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: true
  })
  id?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: true
  })
  title?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: true
  })
  slug?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: true
  })
  url?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: true
  })
  lyric?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: true
  })
  createdAt?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(_type => SongCountOrderByAggregateInput, {
    nullable: true
  })
  _count?: SongCountOrderByAggregateInput | undefined;

  @TypeGraphQL.Field(_type => SongMaxOrderByAggregateInput, {
    nullable: true
  })
  _max?: SongMaxOrderByAggregateInput | undefined;

  @TypeGraphQL.Field(_type => SongMinOrderByAggregateInput, {
    nullable: true
  })
  _min?: SongMinOrderByAggregateInput | undefined;
}
