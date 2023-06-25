import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "../../../type-prisma";
import { DecimalJSScalar } from "../../scalars";
import { SongAuthorUpdateWithoutAuthorInput } from "../inputs/SongAuthorUpdateWithoutAuthorInput";
import { SongAuthorWhereUniqueInput } from "../inputs/SongAuthorWhereUniqueInput";

@TypeGraphQL.InputType("SongAuthorUpdateWithWhereUniqueWithoutAuthorInput", {
  isAbstract: true
})
export class SongAuthorUpdateWithWhereUniqueWithoutAuthorInput {
  @TypeGraphQL.Field(_type => SongAuthorWhereUniqueInput, {
    nullable: false
  })
  where!: SongAuthorWhereUniqueInput;

  @TypeGraphQL.Field(_type => SongAuthorUpdateWithoutAuthorInput, {
    nullable: false
  })
  data!: SongAuthorUpdateWithoutAuthorInput;
}
