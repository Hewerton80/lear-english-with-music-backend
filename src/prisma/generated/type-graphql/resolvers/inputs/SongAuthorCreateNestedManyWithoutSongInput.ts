import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "../../../type-prisma";
import { DecimalJSScalar } from "../../scalars";
import { SongAuthorCreateManySongInputEnvelope } from "../inputs/SongAuthorCreateManySongInputEnvelope";
import { SongAuthorCreateOrConnectWithoutSongInput } from "../inputs/SongAuthorCreateOrConnectWithoutSongInput";
import { SongAuthorCreateWithoutSongInput } from "../inputs/SongAuthorCreateWithoutSongInput";
import { SongAuthorWhereUniqueInput } from "../inputs/SongAuthorWhereUniqueInput";

@TypeGraphQL.InputType("SongAuthorCreateNestedManyWithoutSongInput", {
  isAbstract: true
})
export class SongAuthorCreateNestedManyWithoutSongInput {
  @TypeGraphQL.Field(_type => [SongAuthorCreateWithoutSongInput], {
    nullable: true
  })
  create?: SongAuthorCreateWithoutSongInput[] | undefined;

  @TypeGraphQL.Field(_type => [SongAuthorCreateOrConnectWithoutSongInput], {
    nullable: true
  })
  connectOrCreate?: SongAuthorCreateOrConnectWithoutSongInput[] | undefined;

  @TypeGraphQL.Field(_type => SongAuthorCreateManySongInputEnvelope, {
    nullable: true
  })
  createMany?: SongAuthorCreateManySongInputEnvelope | undefined;

  @TypeGraphQL.Field(_type => [SongAuthorWhereUniqueInput], {
    nullable: true
  })
  connect?: SongAuthorWhereUniqueInput[] | undefined;
}
