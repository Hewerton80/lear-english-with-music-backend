import * as TypeGraphQL from "type-graphql";
import type { GraphQLResolveInfo } from "graphql";
import { FindFirstSongAuthorArgs } from "./args/FindFirstSongAuthorArgs";
import { SongAuthor } from "../../../models/SongAuthor";
import { transformInfoIntoPrismaArgs, getPrismaFromContext, transformCountFieldIntoSelectRelationsCount } from "../../../helpers";

@TypeGraphQL.Resolver(_of => SongAuthor)
export class FindFirstSongAuthorResolver {
  @TypeGraphQL.Query(_returns => SongAuthor, {
    nullable: true
  })
  async findFirstSongAuthor(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: FindFirstSongAuthorArgs): Promise<SongAuthor | null> {
    const { _count } = transformInfoIntoPrismaArgs(info);
    return getPrismaFromContext(ctx).songAuthor.findFirst({
      ...args,
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }
}
