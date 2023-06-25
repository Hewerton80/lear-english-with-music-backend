import type { GraphQLResolveInfo } from "graphql";
import { UpdateOneSongAuthorArgs } from "./args/UpdateOneSongAuthorArgs";
import { SongAuthor } from "../../../models/SongAuthor";
export declare class UpdateOneSongAuthorResolver {
    updateOneSongAuthor(ctx: any, info: GraphQLResolveInfo, args: UpdateOneSongAuthorArgs): Promise<SongAuthor | null>;
}
