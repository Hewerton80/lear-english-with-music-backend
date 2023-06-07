import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { SongAuthorCreateWithoutAuthorInput } from "../inputs/SongAuthorCreateWithoutAuthorInput";
import { SongAuthorUpdateWithoutAuthorInput } from "../inputs/SongAuthorUpdateWithoutAuthorInput";
import { SongAuthorWhereUniqueInput } from "../inputs/SongAuthorWhereUniqueInput";

@TypeGraphQL.InputType("SongAuthorUpsertWithWhereUniqueWithoutAuthorInput", {
  isAbstract: true
})
export class SongAuthorUpsertWithWhereUniqueWithoutAuthorInput {
  @TypeGraphQL.Field(_type => SongAuthorWhereUniqueInput, {
    nullable: false
  })
  where!: SongAuthorWhereUniqueInput;

  @TypeGraphQL.Field(_type => SongAuthorUpdateWithoutAuthorInput, {
    nullable: false
  })
  update!: SongAuthorUpdateWithoutAuthorInput;

  @TypeGraphQL.Field(_type => SongAuthorCreateWithoutAuthorInput, {
    nullable: false
  })
  create!: SongAuthorCreateWithoutAuthorInput;
}
