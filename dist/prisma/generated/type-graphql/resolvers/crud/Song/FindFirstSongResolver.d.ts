import type { GraphQLResolveInfo } from "graphql";
import { FindFirstSongArgs } from "./args/FindFirstSongArgs";
import { Song } from "../../../models/Song";
export declare class FindFirstSongResolver {
    findFirstSong(ctx: any, info: GraphQLResolveInfo, args: FindFirstSongArgs): Promise<Song | null>;
}
