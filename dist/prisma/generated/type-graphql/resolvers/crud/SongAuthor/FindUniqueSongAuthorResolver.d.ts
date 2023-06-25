import type { GraphQLResolveInfo } from "graphql";
import { FindUniqueSongAuthorArgs } from "./args/FindUniqueSongAuthorArgs";
import { SongAuthor } from "../../../models/SongAuthor";
export declare class FindUniqueSongAuthorResolver {
    songAuthor(ctx: any, info: GraphQLResolveInfo, args: FindUniqueSongAuthorArgs): Promise<SongAuthor | null>;
}
