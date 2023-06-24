import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { AuthorCreateOrConnectWithoutSongsInput } from "../inputs/AuthorCreateOrConnectWithoutSongsInput";
import { AuthorCreateWithoutSongsInput } from "../inputs/AuthorCreateWithoutSongsInput";
import { AuthorUpdateWithoutSongsInput } from "../inputs/AuthorUpdateWithoutSongsInput";
import { AuthorUpsertWithoutSongsInput } from "../inputs/AuthorUpsertWithoutSongsInput";
import { AuthorWhereUniqueInput } from "../inputs/AuthorWhereUniqueInput";

@TypeGraphQL.InputType("AuthorUpdateOneRequiredWithoutSongsNestedInput", {
  isAbstract: true
})
export class AuthorUpdateOneRequiredWithoutSongsNestedInput {
  @TypeGraphQL.Field(_type => AuthorCreateWithoutSongsInput, {
    nullable: true
  })
  create?: AuthorCreateWithoutSongsInput | undefined;

  @TypeGraphQL.Field(_type => AuthorCreateOrConnectWithoutSongsInput, {
    nullable: true
  })
  connectOrCreate?: AuthorCreateOrConnectWithoutSongsInput | undefined;

  @TypeGraphQL.Field(_type => AuthorUpsertWithoutSongsInput, {
    nullable: true
  })
  upsert?: AuthorUpsertWithoutSongsInput | undefined;

  @TypeGraphQL.Field(_type => AuthorWhereUniqueInput, {
    nullable: true
  })
  connect?: AuthorWhereUniqueInput | undefined;

  @TypeGraphQL.Field(_type => AuthorUpdateWithoutSongsInput, {
    nullable: true
  })
  update?: AuthorUpdateWithoutSongsInput | undefined;
}
