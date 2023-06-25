import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "../../../type-prisma";
import { DecimalJSScalar } from "../../scalars";
import { AuthorCountAggregate } from "../outputs/AuthorCountAggregate";
import { AuthorMaxAggregate } from "../outputs/AuthorMaxAggregate";
import { AuthorMinAggregate } from "../outputs/AuthorMinAggregate";

@TypeGraphQL.ObjectType("AuthorGroupBy", {
  isAbstract: true
})
export class AuthorGroupBy {
  @TypeGraphQL.Field(_type => String, {
    nullable: false
  })
  id!: string;

  @TypeGraphQL.Field(_type => String, {
    nullable: false
  })
  name!: string;

  @TypeGraphQL.Field(_type => String, {
    nullable: false
  })
  slug!: string;

  @TypeGraphQL.Field(_type => Date, {
    nullable: false
  })
  createdAt!: Date;

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
