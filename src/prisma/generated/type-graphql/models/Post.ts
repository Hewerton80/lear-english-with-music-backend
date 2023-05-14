import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../scalars";
import { User } from "../models/User";
import { Status } from "../enums/Status";

@TypeGraphQL.ObjectType("Post", {
  isAbstract: true
})
export class Post {
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
  content!: string;

  @TypeGraphQL.Field(_type => Status, {
    nullable: false
  })
  status!: "DRAFT" | "INREVISION" | "PUBLISHED" | "UNPUBLISHED";

  @TypeGraphQL.Field(_type => String, {
    nullable: false
  })
  authorId!: string;

  author?: User | null;
}
