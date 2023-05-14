import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { Status } from "../../enums/Status";

@TypeGraphQL.InputType("PostCreateManyInput", {
  isAbstract: true
})
export class PostCreateManyInput {
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
  content!: string;

  @TypeGraphQL.Field(_type => Status, {
    nullable: false
  })
  status!: "DRAFT" | "INREVISION" | "PUBLISHED" | "UNPUBLISHED";

  @TypeGraphQL.Field(_type => String, {
    nullable: false
  })
  authorId!: string;
}
