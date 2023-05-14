import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { UserCreateNestedOneWithoutPostInput } from "../inputs/UserCreateNestedOneWithoutPostInput";
import { Status } from "../../enums/Status";

@TypeGraphQL.InputType("PostCreateInput", {
  isAbstract: true
})
export class PostCreateInput {
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

  @TypeGraphQL.Field(_type => UserCreateNestedOneWithoutPostInput, {
    nullable: true
  })
  author?: UserCreateNestedOneWithoutPostInput | undefined;
}
