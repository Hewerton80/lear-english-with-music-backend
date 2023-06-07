import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { SongAuthorOrderByWithRelationInput } from "../../../inputs/SongAuthorOrderByWithRelationInput";
import { SongAuthorWhereInput } from "../../../inputs/SongAuthorWhereInput";
import { SongAuthorWhereUniqueInput } from "../../../inputs/SongAuthorWhereUniqueInput";
import { SongAuthorScalarFieldEnum } from "../../../../enums/SongAuthorScalarFieldEnum";

@TypeGraphQL.ArgsType()
export class SongAuthorsArgs {
  @TypeGraphQL.Field(_type => SongAuthorWhereInput, {
    nullable: true
  })
  where?: SongAuthorWhereInput | undefined;

  @TypeGraphQL.Field(_type => [SongAuthorOrderByWithRelationInput], {
    nullable: true
  })
  orderBy?: SongAuthorOrderByWithRelationInput[] | undefined;

  @TypeGraphQL.Field(_type => SongAuthorWhereUniqueInput, {
    nullable: true
  })
  cursor?: SongAuthorWhereUniqueInput | undefined;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  take?: number | undefined;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  skip?: number | undefined;

  @TypeGraphQL.Field(_type => [SongAuthorScalarFieldEnum], {
    nullable: true
  })
  distinct?: Array<"authorId" | "songId" | "createdAt"> | undefined;
}
