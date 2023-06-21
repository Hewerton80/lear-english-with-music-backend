import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "../../../type-prisma";
import { DecimalJSScalar } from "../../scalars";
import { AuthorCreateNestedOneWithoutSongsInput } from "../inputs/AuthorCreateNestedOneWithoutSongsInput";

@TypeGraphQL.InputType("SongAuthorCreateWithoutSongInput", {
  isAbstract: true
})
export class SongAuthorCreateWithoutSongInput {
  @TypeGraphQL.Field(_type => Date, {
    nullable: true
  })
  createdAt?: Date | undefined;

  @TypeGraphQL.Field(_type => AuthorCreateNestedOneWithoutSongsInput, {
    nullable: false
  })
  author!: AuthorCreateNestedOneWithoutSongsInput;
}
