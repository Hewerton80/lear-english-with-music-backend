import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { SongCountAuthorsArgs } from "./args/SongCountAuthorsArgs";

@TypeGraphQL.ObjectType("SongCount", {
  isAbstract: true
})
export class SongCount {
  authors!: number;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    name: "authors",
    nullable: false
  })
  getAuthors(@TypeGraphQL.Root() root: SongCount, @TypeGraphQL.Args() args: SongCountAuthorsArgs): number {
    return root.authors;
  }
}
