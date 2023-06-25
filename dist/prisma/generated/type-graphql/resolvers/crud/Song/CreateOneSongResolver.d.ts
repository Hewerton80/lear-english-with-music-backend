import type { GraphQLResolveInfo } from "graphql";
import { CreateOneSongArgs } from "./args/CreateOneSongArgs";
import { Song } from "../../../models/Song";
export declare class CreateOneSongResolver {
    createOneSong(ctx: any, info: GraphQLResolveInfo, args: CreateOneSongArgs): Promise<Song>;
}
