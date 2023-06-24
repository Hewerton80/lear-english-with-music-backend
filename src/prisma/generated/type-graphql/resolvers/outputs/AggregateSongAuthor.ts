import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { SongAuthorCountAggregate } from "../outputs/SongAuthorCountAggregate";
import { SongAuthorMaxAggregate } from "../outputs/SongAuthorMaxAggregate";
import { SongAuthorMinAggregate } from "../outputs/SongAuthorMinAggregate";

@TypeGraphQL.ObjectType("AggregateSongAuthor", {
  isAbstract: true
})
export class AggregateSongAuthor {
  @TypeGraphQL.Field(_type => SongAuthorCountAggregate, {
    nullable: true
  })
  _count!: SongAuthorCountAggregate | null;

  @TypeGraphQL.Field(_type => SongAuthorMinAggregate, {
    nullable: true
  })
  _min!: SongAuthorMinAggregate | null;

  @TypeGraphQL.Field(_type => SongAuthorMaxAggregate, {
    nullable: true
  })
  _max!: SongAuthorMaxAggregate | null;
}
