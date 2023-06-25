import type { GraphQLResolveInfo } from "graphql";
import { FindFirstSongAuthorOrThrowArgs } from "./args/FindFirstSongAuthorOrThrowArgs";
import { SongAuthor } from "../../../models/SongAuthor";
export declare class FindFirstSongAuthorOrThrowResolver {
    findFirstSongAuthorOrThrow(ctx: any, info: GraphQLResolveInfo, args: FindFirstSongAuthorOrThrowArgs): Promise<SongAuthor | null>;
}
