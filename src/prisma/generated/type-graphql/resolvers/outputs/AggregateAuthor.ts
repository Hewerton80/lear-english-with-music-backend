import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { AuthorCountAggregate } from "../outputs/AuthorCountAggregate";
import { AuthorMaxAggregate } from "../outputs/AuthorMaxAggregate";
import { AuthorMinAggregate } from "../outputs/AuthorMinAggregate";

@TypeGraphQL.ObjectType("AggregateAuthor", {
  isAbstract: true
})
export class AggregateAuthor {
  @TypeGraphQL.Field(_type => AuthorCountAggregate, {
    nullable: true
  })
  _count!: AuthorCountAggregate | null;

  @TypeGraphQL.Field(_type => AuthorMinAggregate, {
    nullable: true
  })
  _min!: AuthorMinAggregate | null;

  @TypeGraphQL.Field(_type => AuthorMaxAggregate, {
    nullable: true
  })
  _max!: AuthorMaxAggregate | null;
}
