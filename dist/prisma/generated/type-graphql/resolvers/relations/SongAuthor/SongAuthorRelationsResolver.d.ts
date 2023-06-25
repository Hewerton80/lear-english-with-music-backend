import type { GraphQLResolveInfo } from "graphql";
import { Author } from "../../../models/Author";
import { Song } from "../../../models/Song";
import { SongAuthor } from "../../../models/SongAuthor";
export declare class SongAuthorRelationsResolver {
    author(songAuthor: SongAuthor, ctx: any, info: GraphQLResolveInfo): Promise<Author>;
    song(songAuthor: SongAuthor, ctx: any, info: GraphQLResolveInfo): Promise<Song>;
}
