import type { GraphQLResolveInfo } from "graphql";
import { FindFirstSongAuthorArgs } from "./args/FindFirstSongAuthorArgs";
import { SongAuthor } from "../../../models/SongAuthor";
export declare class FindFirstSongAuthorResolver {
    findFirstSongAuthor(ctx: any, info: GraphQLResolveInfo, args: FindFirstSongAuthorArgs): Promise<SongAuthor | null>;
}
