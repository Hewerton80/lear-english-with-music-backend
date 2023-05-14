import * as TypeGraphQL from "type-graphql";

export enum Role {
  CUSTOMER = "CUSTOMER",
  ADMIN = "ADMIN"
}
TypeGraphQL.registerEnumType(Role, {
  name: "Role",
  description: undefined,
});
