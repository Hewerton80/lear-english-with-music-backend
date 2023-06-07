import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { SongAuthorScalarWhereInput } from "../inputs/SongAuthorScalarWhereInput";
import { SongAuthorUpdateManyMutationInput } from "../inputs/SongAuthorUpdateManyMutationInput";

@TypeGraphQL.InputType("SongAuthorUpdateManyWithWhereWithoutAuthorInput", {
  isAbstract: true
})
export class SongAuthorUpdateManyWithWhereWithoutAuthorInput {
  @TypeGraphQL.Field(_type => SongAuthorScalarWhereInput, {
    nullable: false
  })
  where!: SongAuthorScalarWhereInput;

  @TypeGraphQL.Field(_type => SongAuthorUpdateManyMutationInput, {
    nullable: false
  })
  data!: SongAuthorUpdateManyMutationInput;
}
