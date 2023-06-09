import * as TypeGraphQL from "type-graphql";
import type { GraphQLResolveInfo } from "graphql";
import { AggregateAuthorArgs } from "./args/AggregateAuthorArgs";
import { Author } from "../../../models/Author";
import { AggregateAuthor } from "../../outputs/AggregateAuthor";
import { transformInfoIntoPrismaArgs, getPrismaFromContext, transformCountFieldIntoSelectRelationsCount } from "../../../helpers";

@TypeGraphQL.Resolver(_of => Author)
export class AggregateAuthorResolver {
  @TypeGraphQL.Query(_returns => AggregateAuthor, {
    nullable: false
  })
  async aggregateAuthor(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: AggregateAuthorArgs): Promise<AggregateAuthor> {
    return getPrismaFromContext(ctx).author.aggregate({
      ...args,
      ...transformInfoIntoPrismaArgs(info),
    });
  }
}
