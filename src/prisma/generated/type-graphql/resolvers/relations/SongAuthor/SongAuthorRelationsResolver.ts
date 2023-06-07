import * as TypeGraphQL from "type-graphql";
import type { GraphQLResolveInfo } from "graphql";
import { Author } from "../../../models/Author";
import { Song } from "../../../models/Song";
import { SongAuthor } from "../../../models/SongAuthor";
import { transformInfoIntoPrismaArgs, getPrismaFromContext, transformCountFieldIntoSelectRelationsCount } from "../../../helpers";

@TypeGraphQL.Resolver(_of => SongAuthor)
export class SongAuthorRelationsResolver {
  @TypeGraphQL.FieldResolver(_type => Author, {
    nullable: false
  })
  async author(@TypeGraphQL.Root() songAuthor: SongAuthor, @TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo): Promise<Author> {
    const { _count } = transformInfoIntoPrismaArgs(info);
    return getPrismaFromContext(ctx).songAuthor.findUniqueOrThrow({
      where: {
        songId_authorId: {
          songId: songAuthor.songId,
          authorId: songAuthor.authorId,
        },
      },
    }).author({
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }

  @TypeGraphQL.FieldResolver(_type => Song, {
    nullable: false
  })
  async song(@TypeGraphQL.Root() songAuthor: SongAuthor, @TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo): Promise<Song> {
    const { _count } = transformInfoIntoPrismaArgs(info);
    return getPrismaFromContext(ctx).songAuthor.findUniqueOrThrow({
      where: {
        songId_authorId: {
          songId: songAuthor.songId,
          authorId: songAuthor.authorId,
        },
      },
    }).song({
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }
}
