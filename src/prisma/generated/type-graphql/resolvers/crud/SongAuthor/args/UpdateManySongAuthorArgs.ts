import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { SongAuthorUpdateManyMutationInput } from "../../../inputs/SongAuthorUpdateManyMutationInput";
import { SongAuthorWhereInput } from "../../../inputs/SongAuthorWhereInput";

@TypeGraphQL.ArgsType()
export class UpdateManySongAuthorArgs {
  @TypeGraphQL.Field(_type => SongAuthorUpdateManyMutationInput, {
    nullable: false
  })
  data!: SongAuthorUpdateManyMutationInput;

  @TypeGraphQL.Field(_type => SongAuthorWhereInput, {
    nullable: true
  })
  where?: SongAuthorWhereInput | undefined;
}
