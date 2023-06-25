import type { GraphQLResolveInfo } from "graphql";
import { UpdateOneSongArgs } from "./args/UpdateOneSongArgs";
import { Song } from "../../../models/Song";
export declare class UpdateOneSongResolver {
    updateOneSong(ctx: any, info: GraphQLResolveInfo, args: UpdateOneSongArgs): Promise<Song | null>;
}
