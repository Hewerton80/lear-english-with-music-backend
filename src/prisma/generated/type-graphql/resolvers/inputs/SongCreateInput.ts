import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "../../../type-prisma";
import { DecimalJSScalar } from "../../scalars";
import { SongAuthorCreateNestedManyWithoutSongInput } from "../inputs/SongAuthorCreateNestedManyWithoutSongInput";

@TypeGraphQL.InputType("SongCreateInput", {
  isAbstract: true
})
export class SongCreateInput {
  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  id?: string | undefined;

  @TypeGraphQL.Field(_type => String, {
    nullable: false
  })
  title!: string;

  @TypeGraphQL.Field(_type => String, {
    nullable: false
  })
  url!: string;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  lyric?: string | undefined;

  @TypeGraphQL.Field(_type => Date, {
    nullable: true
  })
  createdAt?: Date | undefined;

  @TypeGraphQL.Field(_type => SongAuthorCreateNestedManyWithoutSongInput, {
    nullable: true
  })
  authors?: SongAuthorCreateNestedManyWithoutSongInput | undefined;
}
