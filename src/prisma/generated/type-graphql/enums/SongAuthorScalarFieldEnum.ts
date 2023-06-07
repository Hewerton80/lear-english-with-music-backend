import * as TypeGraphQL from "type-graphql";

export enum SongAuthorScalarFieldEnum {
  authorId = "authorId",
  songId = "songId",
  createdAt = "createdAt"
}
TypeGraphQL.registerEnumType(SongAuthorScalarFieldEnum, {
  name: "SongAuthorScalarFieldEnum",
  description: undefined,
});
