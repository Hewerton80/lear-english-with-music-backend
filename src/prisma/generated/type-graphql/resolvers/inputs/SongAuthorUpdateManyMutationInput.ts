import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "../../../type-prisma";
import { DecimalJSScalar } from "../../scalars";

@TypeGraphQL.InputType("SongAuthorUpdateManyMutationInput", {
  isAbstract: true
})
export class SongAuthorUpdateManyMutationInput {
  @TypeGraphQL.Field(_type => Date, {
    nullable: true
  })
  createdAt?: Date | undefined;
}
