import * as TypeGraphQL from "type-graphql";
import type { GraphQLResolveInfo } from "graphql";
import { AggregateSongArgs } from "./args/AggregateSongArgs";
import { Song } from "../../../models/Song";
import { AggregateSong } from "../../outputs/AggregateSong";
import { transformInfoIntoPrismaArgs, getPrismaFromContext, transformCountFieldIntoSelectRelationsCount } from "../../../helpers";

@TypeGraphQL.Resolver(_of => Song)
export class AggregateSongResolver {
  @TypeGraphQL.Query(_returns => AggregateSong, {
    nullable: false
  })
  async aggregateSong(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: AggregateSongArgs): Promise<AggregateSong> {
    return getPrismaFromContext(ctx).song.aggregate({
      ...args,
      ...transformInfoIntoPrismaArgs(info),
    });
  }
}
