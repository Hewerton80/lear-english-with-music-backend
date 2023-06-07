import * as TypeGraphQL from "type-graphql";
import type { GraphQLResolveInfo } from "graphql";
import { GroupBySongAuthorArgs } from "./args/GroupBySongAuthorArgs";
import { SongAuthor } from "../../../models/SongAuthor";
import { SongAuthorGroupBy } from "../../outputs/SongAuthorGroupBy";
import { transformInfoIntoPrismaArgs, getPrismaFromContext, transformCountFieldIntoSelectRelationsCount } from "../../../helpers";

@TypeGraphQL.Resolver(_of => SongAuthor)
export class GroupBySongAuthorResolver {
  @TypeGraphQL.Query(_returns => [SongAuthorGroupBy], {
    nullable: false
  })
  async groupBySongAuthor(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: GroupBySongAuthorArgs): Promise<SongAuthorGroupBy[]> {
    const { _count, _avg, _sum, _min, _max } = transformInfoIntoPrismaArgs(info);
    return getPrismaFromContext(ctx).songAuthor.groupBy({
      ...args,
      ...Object.fromEntries(
        Object.entries({ _count, _avg, _sum, _min, _max }).filter(([_, v]) => v != null)
      ),
    });
  }
}
