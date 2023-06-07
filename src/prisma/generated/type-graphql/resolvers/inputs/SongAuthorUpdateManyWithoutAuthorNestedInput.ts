import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { SongAuthorCreateManyAuthorInputEnvelope } from "../inputs/SongAuthorCreateManyAuthorInputEnvelope";
import { SongAuthorCreateOrConnectWithoutAuthorInput } from "../inputs/SongAuthorCreateOrConnectWithoutAuthorInput";
import { SongAuthorCreateWithoutAuthorInput } from "../inputs/SongAuthorCreateWithoutAuthorInput";
import { SongAuthorScalarWhereInput } from "../inputs/SongAuthorScalarWhereInput";
import { SongAuthorUpdateManyWithWhereWithoutAuthorInput } from "../inputs/SongAuthorUpdateManyWithWhereWithoutAuthorInput";
import { SongAuthorUpdateWithWhereUniqueWithoutAuthorInput } from "../inputs/SongAuthorUpdateWithWhereUniqueWithoutAuthorInput";
import { SongAuthorUpsertWithWhereUniqueWithoutAuthorInput } from "../inputs/SongAuthorUpsertWithWhereUniqueWithoutAuthorInput";
import { SongAuthorWhereUniqueInput } from "../inputs/SongAuthorWhereUniqueInput";

@TypeGraphQL.InputType("SongAuthorUpdateManyWithoutAuthorNestedInput", {
  isAbstract: true
})
export class SongAuthorUpdateManyWithoutAuthorNestedInput {
  @TypeGraphQL.Field(_type => [SongAuthorCreateWithoutAuthorInput], {
    nullable: true
  })
  create?: SongAuthorCreateWithoutAuthorInput[] | undefined;

  @TypeGraphQL.Field(_type => [SongAuthorCreateOrConnectWithoutAuthorInput], {
    nullable: true
  })
  connectOrCreate?: SongAuthorCreateOrConnectWithoutAuthorInput[] | undefined;

  @TypeGraphQL.Field(_type => [SongAuthorUpsertWithWhereUniqueWithoutAuthorInput], {
    nullable: true
  })
  upsert?: SongAuthorUpsertWithWhereUniqueWithoutAuthorInput[] | undefined;

  @TypeGraphQL.Field(_type => SongAuthorCreateManyAuthorInputEnvelope, {
    nullable: true
  })
  createMany?: SongAuthorCreateManyAuthorInputEnvelope | undefined;

  @TypeGraphQL.Field(_type => [SongAuthorWhereUniqueInput], {
    nullable: true
  })
  set?: SongAuthorWhereUniqueInput[] | undefined;

  @TypeGraphQL.Field(_type => [SongAuthorWhereUniqueInput], {
    nullable: true
  })
  disconnect?: SongAuthorWhereUniqueInput[] | undefined;

  @TypeGraphQL.Field(_type => [SongAuthorWhereUniqueInput], {
    nullable: true
  })
  delete?: SongAuthorWhereUniqueInput[] | undefined;

  @TypeGraphQL.Field(_type => [SongAuthorWhereUniqueInput], {
    nullable: true
  })
  connect?: SongAuthorWhereUniqueInput[] | undefined;

  @TypeGraphQL.Field(_type => [SongAuthorUpdateWithWhereUniqueWithoutAuthorInput], {
    nullable: true
  })
  update?: SongAuthorUpdateWithWhereUniqueWithoutAuthorInput[] | undefined;

  @TypeGraphQL.Field(_type => [SongAuthorUpdateManyWithWhereWithoutAuthorInput], {
    nullable: true
  })
  updateMany?: SongAuthorUpdateManyWithWhereWithoutAuthorInput[] | undefined;

  @TypeGraphQL.Field(_type => [SongAuthorScalarWhereInput], {
    nullable: true
  })
  deleteMany?: SongAuthorScalarWhereInput[] | undefined;
}
