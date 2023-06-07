import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../scalars";
import { SongAuthor } from "../models/SongAuthor";
import { AuthorCount } from "../resolvers/outputs/AuthorCount";

@TypeGraphQL.ObjectType("Author", {
  isAbstract: true
})
export class Author {
  @TypeGraphQL.Field(_type => String, {
    nullable: false
  })
  id!: string;

  @TypeGraphQL.Field(_type => String, {
    nullable: false
  })
  name!: string;

  @TypeGraphQL.Field(_type => String, {
    nullable: false
  })
  slug!: string;

  songs?: SongAuthor[];

  @TypeGraphQL.Field(_type => Date, {
    nullable: false
  })
  createdAt!: Date;

  @TypeGraphQL.Field(_type => AuthorCount, {
    nullable: true
  })
  _count?: AuthorCount | null;
}
