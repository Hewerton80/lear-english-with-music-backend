import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { SongAuthorCountOrderByAggregateInput } from "../inputs/SongAuthorCountOrderByAggregateInput";
import { SongAuthorMaxOrderByAggregateInput } from "../inputs/SongAuthorMaxOrderByAggregateInput";
import { SongAuthorMinOrderByAggregateInput } from "../inputs/SongAuthorMinOrderByAggregateInput";
import { SortOrder } from "../../enums/SortOrder";

@TypeGraphQL.InputType("SongAuthorOrderByWithAggregationInput", {
  isAbstract: true
})
export class SongAuthorOrderByWithAggregationInput {
  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: true
  })
  authorId?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: true
  })
  songId?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: true
  })
  createdAt?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(_type => SongAuthorCountOrderByAggregateInput, {
    nullable: true
  })
  _count?: SongAuthorCountOrderByAggregateInput | undefined;

  @TypeGraphQL.Field(_type => SongAuthorMaxOrderByAggregateInput, {
    nullable: true
  })
  _max?: SongAuthorMaxOrderByAggregateInput | undefined;

  @TypeGraphQL.Field(_type => SongAuthorMinOrderByAggregateInput, {
    nullable: true
  })
  _min?: SongAuthorMinOrderByAggregateInput | undefined;
}
