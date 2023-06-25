import type { GraphQLResolveInfo } from "graphql";
import { FindUniqueSongAuthorOrThrowArgs } from "./args/FindUniqueSongAuthorOrThrowArgs";
import { SongAuthor } from "../../../models/SongAuthor";
export declare class FindUniqueSongAuthorOrThrowResolver {
    getSongAuthor(ctx: any, info: GraphQLResolveInfo, args: FindUniqueSongAuthorOrThrowArgs): Promise<SongAuthor | null>;
}
