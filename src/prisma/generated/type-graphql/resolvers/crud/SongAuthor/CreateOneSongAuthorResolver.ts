import * as TypeGraphQL from "type-graphql";
import type { GraphQLResolveInfo } from "graphql";
import { CreateOneSongAuthorArgs } from "./args/CreateOneSongAuthorArgs";
import { SongAuthor } from "../../../models/SongAuthor";
import { transformInfoIntoPrismaArgs, getPrismaFromContext, transformCountFieldIntoSelectRelationsCount } from "../../../helpers";

@TypeGraphQL.Resolver(_of => SongAuthor)
export class CreateOneSongAuthorResolver {
  @TypeGraphQL.Mutation(_returns => SongAuthor, {
    nullable: false
  })
  async createOneSongAuthor(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: CreateOneSongAuthorArgs): Promise<SongAuthor> {
    const { _count } = transformInfoIntoPrismaArgs(info);
    return getPrismaFromContext(ctx).songAuthor.create({
      ...args,
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }
}
