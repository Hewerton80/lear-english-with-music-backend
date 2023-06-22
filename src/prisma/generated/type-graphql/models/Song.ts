import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "../../type-prisma";
import { DecimalJSScalar } from "../scalars";
import { SongAuthor } from "../models/SongAuthor";
import { SongCount } from "../resolvers/outputs/SongCount";

@TypeGraphQL.ObjectType("Song", {
  isAbstract: true
})
export class Song {
  @TypeGraphQL.Field(_type => String, {
    nullable: false
  })
  id!: string;

  @TypeGraphQL.Field(_type => String, {
    nullable: false
  })
  title!: string;

  @TypeGraphQL.Field(_type => String, {
    nullable: false
  })
  slug!: string;

  @TypeGraphQL.Field(_type => String, {
    nullable: false
  })
  url!: string;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  lyric?: string | null;

  authors?: SongAuthor[];

  @TypeGraphQL.Field(_type => Date, {
    nullable: false
  })
  createdAt!: Date;

  @TypeGraphQL.Field(_type => SongCount, {
    nullable: true
  })
  _count?: SongCount | null;
}
