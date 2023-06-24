import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { SongCountAggregate } from "../outputs/SongCountAggregate";
import { SongMaxAggregate } from "../outputs/SongMaxAggregate";
import { SongMinAggregate } from "../outputs/SongMinAggregate";

@TypeGraphQL.ObjectType("AggregateSong", {
  isAbstract: true
})
export class AggregateSong {
  @TypeGraphQL.Field(_type => SongCountAggregate, {
    nullable: true
  })
  _count!: SongCountAggregate | null;

  @TypeGraphQL.Field(_type => SongMinAggregate, {
    nullable: true
  })
  _min!: SongMinAggregate | null;

  @TypeGraphQL.Field(_type => SongMaxAggregate, {
    nullable: true
  })
  _max!: SongMaxAggregate | null;
}
