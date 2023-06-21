import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "../../../type-prisma";
import { DecimalJSScalar } from "../../scalars";
import { SongAuthorCreateManyAuthorInput } from "../inputs/SongAuthorCreateManyAuthorInput";

@TypeGraphQL.InputType("SongAuthorCreateManyAuthorInputEnvelope", {
  isAbstract: true
})
export class SongAuthorCreateManyAuthorInputEnvelope {
  @TypeGraphQL.Field(_type => [SongAuthorCreateManyAuthorInput], {
    nullable: false
  })
  data!: SongAuthorCreateManyAuthorInput[];

  @TypeGraphQL.Field(_type => Boolean, {
    nullable: true
  })
  skipDuplicates?: boolean | undefined;
}
