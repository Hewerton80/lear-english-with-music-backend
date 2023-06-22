import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "../../../type-prisma";
import { DecimalJSScalar } from "../../scalars";
import { SongAuthorCreateManySongInput } from "../inputs/SongAuthorCreateManySongInput";

@TypeGraphQL.InputType("SongAuthorCreateManySongInputEnvelope", {
  isAbstract: true
})
export class SongAuthorCreateManySongInputEnvelope {
  @TypeGraphQL.Field(_type => [SongAuthorCreateManySongInput], {
    nullable: false
  })
  data!: SongAuthorCreateManySongInput[];

  @TypeGraphQL.Field(_type => Boolean, {
    nullable: true
  })
  skipDuplicates?: boolean | undefined;
}
