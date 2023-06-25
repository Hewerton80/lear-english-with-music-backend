import type { GraphQLResolveInfo } from "graphql";
import { UpsertOneSongArgs } from "./args/UpsertOneSongArgs";
import { Song } from "../../../models/Song";
export declare class UpsertOneSongResolver {
    upsertOneSong(ctx: any, info: GraphQLResolveInfo, args: UpsertOneSongArgs): Promise<Song>;
}
