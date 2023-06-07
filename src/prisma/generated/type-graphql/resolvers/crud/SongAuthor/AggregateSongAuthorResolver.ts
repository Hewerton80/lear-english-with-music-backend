import * as TypeGraphQL from "type-graphql";
import type { GraphQLResolveInfo } from "graphql";
import { AggregateSongAuthorArgs } from "./args/AggregateSongAuthorArgs";
import { SongAuthor } from "../../../models/SongAuthor";
import { AggregateSongAuthor } from "../../outputs/AggregateSongAuthor";
import { transformInfoIntoPrismaArgs, getPrismaFromContext, transformCountFieldIntoSelectRelationsCount } from "../../../helpers";

@TypeGraphQL.Resolver(_of => SongAuthor)
export class AggregateSongAuthorResolver {
  @TypeGraphQL.Query(_returns => AggregateSongAuthor, {
    nullable: false
  })
  async aggregateSongAuthor(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: AggregateSongAuthorArgs): Promise<AggregateSongAuthor> {
    return getPrismaFromContext(ctx).songAuthor.aggregate({
      ...args,
      ...transformInfoIntoPrismaArgs(info),
    });
  }
}
