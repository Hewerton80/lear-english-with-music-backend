import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { SongCreateNestedOneWithoutAuthorsInput } from "../inputs/SongCreateNestedOneWithoutAuthorsInput";

@TypeGraphQL.InputType("SongAuthorCreateWithoutAuthorInput", {
  isAbstract: true
})
export class SongAuthorCreateWithoutAuthorInput {
  @TypeGraphQL.Field(_type => Date, {
    nullable: true
  })
  createdAt?: Date | undefined;

  @TypeGraphQL.Field(_type => SongCreateNestedOneWithoutAuthorsInput, {
    nullable: false
  })
  song!: SongCreateNestedOneWithoutAuthorsInput;
}
