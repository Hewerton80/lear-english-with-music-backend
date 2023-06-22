import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "../../../type-prisma";
import { DecimalJSScalar } from "../../scalars";
import { SongCreateOrConnectWithoutAuthorsInput } from "../inputs/SongCreateOrConnectWithoutAuthorsInput";
import { SongCreateWithoutAuthorsInput } from "../inputs/SongCreateWithoutAuthorsInput";
import { SongWhereUniqueInput } from "../inputs/SongWhereUniqueInput";

@TypeGraphQL.InputType("SongCreateNestedOneWithoutAuthorsInput", {
  isAbstract: true
})
export class SongCreateNestedOneWithoutAuthorsInput {
  @TypeGraphQL.Field(_type => SongCreateWithoutAuthorsInput, {
    nullable: true
  })
  create?: SongCreateWithoutAuthorsInput | undefined;

  @TypeGraphQL.Field(_type => SongCreateOrConnectWithoutAuthorsInput, {
    nullable: true
  })
  connectOrCreate?: SongCreateOrConnectWithoutAuthorsInput | undefined;

  @TypeGraphQL.Field(_type => SongWhereUniqueInput, {
    nullable: true
  })
  connect?: SongWhereUniqueInput | undefined;
}
