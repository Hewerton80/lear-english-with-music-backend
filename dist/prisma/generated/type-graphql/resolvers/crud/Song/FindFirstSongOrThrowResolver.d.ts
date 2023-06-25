import type { GraphQLResolveInfo } from "graphql";
import { FindFirstSongOrThrowArgs } from "./args/FindFirstSongOrThrowArgs";
import { Song } from "../../../models/Song";
export declare class FindFirstSongOrThrowResolver {
    findFirstSongOrThrow(ctx: any, info: GraphQLResolveInfo, args: FindFirstSongOrThrowArgs): Promise<Song | null>;
}
