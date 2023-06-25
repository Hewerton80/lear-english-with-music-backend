import type { GraphQLResolveInfo } from "graphql";
import { Song } from "../../../models/Song";
import { SongAuthor } from "../../../models/SongAuthor";
import { SongAuthorsArgs } from "./args/SongAuthorsArgs";
export declare class SongRelationsResolver {
    authors(song: Song, ctx: any, info: GraphQLResolveInfo, args: SongAuthorsArgs): Promise<SongAuthor[]>;
}
