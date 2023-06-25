import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "../../../type-prisma";
import { DecimalJSScalar } from "../../scalars";
import { SongCreateOrConnectWithoutAuthorsInput } from "../inputs/SongCreateOrConnectWithoutAuthorsInput";
import { SongCreateWithoutAuthorsInput } from "../inputs/SongCreateWithoutAuthorsInput";
import { SongUpdateWithoutAuthorsInput } from "../inputs/SongUpdateWithoutAuthorsInput";
import { SongUpsertWithoutAuthorsInput } from "../inputs/SongUpsertWithoutAuthorsInput";
import { SongWhereUniqueInput } from "../inputs/SongWhereUniqueInput";

@TypeGraphQL.InputType("SongUpdateOneRequiredWithoutAuthorsNestedInput", {
  isAbstract: true
})
export class SongUpdateOneRequiredWithoutAuthorsNestedInput {
  @TypeGraphQL.Field(_type => SongCreateWithoutAuthorsInput, {
    nullable: true
  })
  create?: SongCreateWithoutAuthorsInput | undefined;

  @TypeGraphQL.Field(_type => SongCreateOrConnectWithoutAuthorsInput, {
    nullable: true
  })
  connectOrCreate?: SongCreateOrConnectWithoutAuthorsInput | undefined;

  @TypeGraphQL.Field(_type => SongUpsertWithoutAuthorsInput, {
    nullable: true
  })
  upsert?: SongUpsertWithoutAuthorsInput | undefined;

  @TypeGraphQL.Field(_type => SongWhereUniqueInput, {
    nullable: true
  })
  connect?: SongWhereUniqueInput | undefined;

  @TypeGraphQL.Field(_type => SongUpdateWithoutAuthorsInput, {
    nullable: true
  })
  update?: SongUpdateWithoutAuthorsInput | undefined;
}
