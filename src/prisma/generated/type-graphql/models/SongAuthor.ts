import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../scalars";
import { Author } from "../models/Author";
import { Song } from "../models/Song";

@TypeGraphQL.ObjectType("SongAuthor", {
  isAbstract: true
})
export class SongAuthor {
  @TypeGraphQL.Field(_type => String, {
    nullable: false
  })
  authorId!: string;

  author?: Author;

  @TypeGraphQL.Field(_type => String, {
    nullable: false
  })
  songId!: string;

  song?: Song;

  @TypeGraphQL.Field(_type => Date, {
    nullable: false
  })
  createdAt!: Date;
}
