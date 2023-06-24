import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { SongAuthorCreateManySongInputEnvelope } from "../inputs/SongAuthorCreateManySongInputEnvelope";
import { SongAuthorCreateOrConnectWithoutSongInput } from "../inputs/SongAuthorCreateOrConnectWithoutSongInput";
import { SongAuthorCreateWithoutSongInput } from "../inputs/SongAuthorCreateWithoutSongInput";
import { SongAuthorScalarWhereInput } from "../inputs/SongAuthorScalarWhereInput";
import { SongAuthorUpdateManyWithWhereWithoutSongInput } from "../inputs/SongAuthorUpdateManyWithWhereWithoutSongInput";
import { SongAuthorUpdateWithWhereUniqueWithoutSongInput } from "../inputs/SongAuthorUpdateWithWhereUniqueWithoutSongInput";
import { SongAuthorUpsertWithWhereUniqueWithoutSongInput } from "../inputs/SongAuthorUpsertWithWhereUniqueWithoutSongInput";
import { SongAuthorWhereUniqueInput } from "../inputs/SongAuthorWhereUniqueInput";

@TypeGraphQL.InputType("SongAuthorUpdateManyWithoutSongNestedInput", {
  isAbstract: true
})
export class SongAuthorUpdateManyWithoutSongNestedInput {
  @TypeGraphQL.Field(_type => [SongAuthorCreateWithoutSongInput], {
    nullable: true
  })
  create?: SongAuthorCreateWithoutSongInput[] | undefined;

  @TypeGraphQL.Field(_type => [SongAuthorCreateOrConnectWithoutSongInput], {
    nullable: true
  })
  connectOrCreate?: SongAuthorCreateOrConnectWithoutSongInput[] | undefined;

  @TypeGraphQL.Field(_type => [SongAuthorUpsertWithWhereUniqueWithoutSongInput], {
    nullable: true
  })
  upsert?: SongAuthorUpsertWithWhereUniqueWithoutSongInput[] | undefined;

  @TypeGraphQL.Field(_type => SongAuthorCreateManySongInputEnvelope, {
    nullable: true
  })
  createMany?: SongAuthorCreateManySongInputEnvelope | undefined;

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

  @TypeGraphQL.Field(_type => [SongAuthorUpdateWithWhereUniqueWithoutSongInput], {
    nullable: true
  })
  update?: SongAuthorUpdateWithWhereUniqueWithoutSongInput[] | undefined;

  @TypeGraphQL.Field(_type => [SongAuthorUpdateManyWithWhereWithoutSongInput], {
    nullable: true
  })
  updateMany?: SongAuthorUpdateManyWithWhereWithoutSongInput[] | undefined;

  @TypeGraphQL.Field(_type => [SongAuthorScalarWhereInput], {
    nullable: true
  })
  deleteMany?: SongAuthorScalarWhereInput[] | undefined;
}
