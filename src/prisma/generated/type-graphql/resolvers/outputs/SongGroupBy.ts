import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { SongCountAggregate } from "../outputs/SongCountAggregate";
import { SongMaxAggregate } from "../outputs/SongMaxAggregate";
import { SongMinAggregate } from "../outputs/SongMinAggregate";

@TypeGraphQL.ObjectType("SongGroupBy", {
  isAbstract: true
})
export class SongGroupBy {
  @TypeGraphQL.Field(_type => String, {
    nullable: false
  })
  id!: string;

  @TypeGraphQL.Field(_type => String, {
    nullable: false
  })
  title!: string;

  @TypeGraphQL.Field(_type => String, {
    nullable: false
  })
  slug!: string;

  @TypeGraphQL.Field(_type => Date, {
    nullable: false
  })
  createdAt!: Date;

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
