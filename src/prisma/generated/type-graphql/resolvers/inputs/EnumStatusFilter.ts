import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { NestedEnumStatusFilter } from "../inputs/NestedEnumStatusFilter";
import { Status } from "../../enums/Status";

@TypeGraphQL.InputType("EnumStatusFilter", {
  isAbstract: true
})
export class EnumStatusFilter {
  @TypeGraphQL.Field(_type => Status, {
    nullable: true
  })
  equals?: "DRAFT" | "INREVISION" | "PUBLISHED" | "UNPUBLISHED" | undefined;

  @TypeGraphQL.Field(_type => [Status], {
    nullable: true
  })
  in?: Array<"DRAFT" | "INREVISION" | "PUBLISHED" | "UNPUBLISHED"> | undefined;

  @TypeGraphQL.Field(_type => [Status], {
    nullable: true
  })
  notIn?: Array<"DRAFT" | "INREVISION" | "PUBLISHED" | "UNPUBLISHED"> | undefined;

  @TypeGraphQL.Field(_type => NestedEnumStatusFilter, {
    nullable: true
  })
  not?: NestedEnumStatusFilter | undefined;
}
