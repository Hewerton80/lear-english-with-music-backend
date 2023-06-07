import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { SongAuthorCreateManyAuthorInputEnvelope } from "../inputs/SongAuthorCreateManyAuthorInputEnvelope";
import { SongAuthorCreateOrConnectWithoutAuthorInput } from "../inputs/SongAuthorCreateOrConnectWithoutAuthorInput";
import { SongAuthorCreateWithoutAuthorInput } from "../inputs/SongAuthorCreateWithoutAuthorInput";
import { SongAuthorWhereUniqueInput } from "../inputs/SongAuthorWhereUniqueInput";

@TypeGraphQL.InputType("SongAuthorCreateNestedManyWithoutAuthorInput", {
  isAbstract: true
})
export class SongAuthorCreateNestedManyWithoutAuthorInput {
  @TypeGraphQL.Field(_type => [SongAuthorCreateWithoutAuthorInput], {
    nullable: true
  })
  create?: SongAuthorCreateWithoutAuthorInput[] | undefined;

  @TypeGraphQL.Field(_type => [SongAuthorCreateOrConnectWithoutAuthorInput], {
    nullable: true
  })
  connectOrCreate?: SongAuthorCreateOrConnectWithoutAuthorInput[] | undefined;

  @TypeGraphQL.Field(_type => SongAuthorCreateManyAuthorInputEnvelope, {
    nullable: true
  })
  createMany?: SongAuthorCreateManyAuthorInputEnvelope | undefined;

  @TypeGraphQL.Field(_type => [SongAuthorWhereUniqueInput], {
    nullable: true
  })
  connect?: SongAuthorWhereUniqueInput[] | undefined;
}
