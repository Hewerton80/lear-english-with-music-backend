import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "../../../type-prisma";
import { DecimalJSScalar } from "../../scalars";
import { AuthorCountSongsArgs } from "./args/AuthorCountSongsArgs";

@TypeGraphQL.ObjectType("AuthorCount", {
  isAbstract: true
})
export class AuthorCount {
  songs!: number;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    name: "songs",
    nullable: false
  })
  getSongs(@TypeGraphQL.Root() root: AuthorCount, @TypeGraphQL.Args() args: AuthorCountSongsArgs): number {
    return root.songs;
  }
}
