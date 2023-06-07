import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { SongAuthorCreateWithoutAuthorInput } from "../inputs/SongAuthorCreateWithoutAuthorInput";
import { SongAuthorWhereUniqueInput } from "../inputs/SongAuthorWhereUniqueInput";

@TypeGraphQL.InputType("SongAuthorCreateOrConnectWithoutAuthorInput", {
  isAbstract: true
})
export class SongAuthorCreateOrConnectWithoutAuthorInput {
  @TypeGraphQL.Field(_type => SongAuthorWhereUniqueInput, {
    nullable: false
  })
  where!: SongAuthorWhereUniqueInput;

  @TypeGraphQL.Field(_type => SongAuthorCreateWithoutAuthorInput, {
    nullable: false
  })
  create!: SongAuthorCreateWithoutAuthorInput;
}
