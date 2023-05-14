import * as TypeGraphQL from "type-graphql";

export enum Status {
  DRAFT = "DRAFT",
  INREVISION = "INREVISION",
  PUBLISHED = "PUBLISHED",
  UNPUBLISHED = "UNPUBLISHED"
}
TypeGraphQL.registerEnumType(Status, {
  name: "Status",
  description: undefined,
});
