import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "../../../type-prisma";
import { DecimalJSScalar } from "../../scalars";
import { SongAuthorScalarWhereInput } from "../inputs/SongAuthorScalarWhereInput";
import { SongAuthorUpdateManyMutationInput } from "../inputs/SongAuthorUpdateManyMutationInput";

@TypeGraphQL.InputType("SongAuthorUpdateManyWithWhereWithoutSongInput", {
  isAbstract: true
})
export class SongAuthorUpdateManyWithWhereWithoutSongInput {
  @TypeGraphQL.Field(_type => SongAuthorScalarWhereInput, {
    nullable: false
  })
  where!: SongAuthorScalarWhereInput;

  @TypeGraphQL.Field(_type => SongAuthorUpdateManyMutationInput, {
    nullable: false
  })
  data!: SongAuthorUpdateManyMutationInput;
}
