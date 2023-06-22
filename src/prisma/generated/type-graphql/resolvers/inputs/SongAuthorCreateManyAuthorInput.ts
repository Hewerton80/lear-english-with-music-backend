import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "../../../type-prisma";
import { DecimalJSScalar } from "../../scalars";

@TypeGraphQL.InputType("SongAuthorCreateManyAuthorInput", {
  isAbstract: true
})
export class SongAuthorCreateManyAuthorInput {
  @TypeGraphQL.Field(_type => String, {
    nullable: false
  })
  songId!: string;

  @TypeGraphQL.Field(_type => Date, {
    nullable: true
  })
  createdAt?: Date | undefined;
}
