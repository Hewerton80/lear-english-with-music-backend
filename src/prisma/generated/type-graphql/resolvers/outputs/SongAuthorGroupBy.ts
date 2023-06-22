import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "../../../type-prisma";
import { DecimalJSScalar } from "../../scalars";
import { SongAuthorCountAggregate } from "../outputs/SongAuthorCountAggregate";
import { SongAuthorMaxAggregate } from "../outputs/SongAuthorMaxAggregate";
import { SongAuthorMinAggregate } from "../outputs/SongAuthorMinAggregate";

@TypeGraphQL.ObjectType("SongAuthorGroupBy", {
  isAbstract: true
})
export class SongAuthorGroupBy {
  @TypeGraphQL.Field(_type => String, {
    nullable: false
  })
  authorId!: string;

  @TypeGraphQL.Field(_type => String, {
    nullable: false
  })
  songId!: string;

  @TypeGraphQL.Field(_type => Date, {
    nullable: false
  })
  createdAt!: Date;

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
