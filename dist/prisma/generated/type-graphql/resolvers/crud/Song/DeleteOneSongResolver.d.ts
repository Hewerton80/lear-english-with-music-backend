import type { GraphQLResolveInfo } from "graphql";
import { DeleteOneSongArgs } from "./args/DeleteOneSongArgs";
import { Song } from "../../../models/Song";
export declare class DeleteOneSongResolver {
    deleteOneSong(ctx: any, info: GraphQLResolveInfo, args: DeleteOneSongArgs): Promise<Song | null>;
}
