import * as TypeGraphQL from "type-graphql";
import type { GraphQLResolveInfo } from "graphql";
import { Author } from "../../../models/Author";
import { SongAuthor } from "../../../models/SongAuthor";
import { AuthorSongsArgs } from "./args/AuthorSongsArgs";
import { transformInfoIntoPrismaArgs, getPrismaFromContext, transformCountFieldIntoSelectRelationsCount } from "../../../helpers";

@TypeGraphQL.Resolver(_of => Author)
export class AuthorRelationsResolver {
  @TypeGraphQL.FieldResolver(_type => [SongAuthor], {
    nullable: false
  })
  async songs(@TypeGraphQL.Root() author: Author, @TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: AuthorSongsArgs): Promise<SongAuthor[]> {
    const { _count } = transformInfoIntoPrismaArgs(info);
    return getPrismaFromContext(ctx).author.findUniqueOrThrow({
      where: {
        id: author.id,
      },
    }).songs({
      ...args,
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }
}
