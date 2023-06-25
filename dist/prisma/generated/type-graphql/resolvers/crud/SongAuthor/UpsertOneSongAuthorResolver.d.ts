import type { GraphQLResolveInfo } from "graphql";
import { UpsertOneSongAuthorArgs } from "./args/UpsertOneSongAuthorArgs";
import { SongAuthor } from "../../../models/SongAuthor";
export declare class UpsertOneSongAuthorResolver {
    upsertOneSongAuthor(ctx: any, info: GraphQLResolveInfo, args: UpsertOneSongAuthorArgs): Promise<SongAuthor>;
}
