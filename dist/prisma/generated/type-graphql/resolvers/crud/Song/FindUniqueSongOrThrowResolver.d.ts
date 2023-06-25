import type { GraphQLResolveInfo } from "graphql";
import { FindUniqueSongOrThrowArgs } from "./args/FindUniqueSongOrThrowArgs";
import { Song } from "../../../models/Song";
export declare class FindUniqueSongOrThrowResolver {
    getSong(ctx: any, info: GraphQLResolveInfo, args: FindUniqueSongOrThrowArgs): Promise<Song | null>;
}
