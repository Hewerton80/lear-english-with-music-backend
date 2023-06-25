import type { GraphQLResolveInfo } from "graphql";
import { FindUniqueSongArgs } from "./args/FindUniqueSongArgs";
import { Song } from "../../../models/Song";
export declare class FindUniqueSongResolver {
    song(ctx: any, info: GraphQLResolveInfo, args: FindUniqueSongArgs): Promise<Song | null>;
}
