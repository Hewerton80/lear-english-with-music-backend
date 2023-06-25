import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "../../../type-prisma";
import { DecimalJSScalar } from "../../scalars";

@TypeGraphQL.ObjectType("SongAuthorMinAggregate", {
  isAbstract: true
})
export class SongAuthorMinAggregate {
  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  authorId!: string | null;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  songId!: string | null;

  @TypeGraphQL.Field(_type => Date, {
    nullable: true
  })
  createdAt!: Date | null;
}
