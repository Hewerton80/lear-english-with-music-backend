import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "../../../type-prisma";
import { DecimalJSScalar } from "../../scalars";
import { AuthorCreateNestedOneWithoutSongsInput } from "../inputs/AuthorCreateNestedOneWithoutSongsInput";
import { SongCreateNestedOneWithoutAuthorsInput } from "../inputs/SongCreateNestedOneWithoutAuthorsInput";

@TypeGraphQL.InputType("SongAuthorCreateInput", {
  isAbstract: true
})
export class SongAuthorCreateInput {
  @TypeGraphQL.Field(_type => Date, {
    nullable: true
  })
  createdAt?: Date | undefined;

  @TypeGraphQL.Field(_type => AuthorCreateNestedOneWithoutSongsInput, {
    nullable: false
  })
  author!: AuthorCreateNestedOneWithoutSongsInput;

  @TypeGraphQL.Field(_type => SongCreateNestedOneWithoutAuthorsInput, {
    nullable: false
  })
  song!: SongCreateNestedOneWithoutAuthorsInput;
}
