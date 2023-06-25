import type { GraphQLResolveInfo } from "graphql";
import { FindManySongArgs } from "./args/FindManySongArgs";
import { Song } from "../../../models/Song";
export declare class FindManySongResolver {
    songs(ctx: any, info: GraphQLResolveInfo, args: FindManySongArgs): Promise<Song[]>;
}
