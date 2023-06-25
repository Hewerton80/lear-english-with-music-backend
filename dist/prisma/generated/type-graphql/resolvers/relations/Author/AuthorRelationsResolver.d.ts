import type { GraphQLResolveInfo } from "graphql";
import { Author } from "../../../models/Author";
import { SongAuthor } from "../../../models/SongAuthor";
import { AuthorSongsArgs } from "./args/AuthorSongsArgs";
export declare class AuthorRelationsResolver {
    songs(author: Author, ctx: any, info: GraphQLResolveInfo, args: AuthorSongsArgs): Promise<SongAuthor[]>;
}
