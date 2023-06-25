import type { GraphQLResolveInfo } from "graphql";
import { DeleteOneSongAuthorArgs } from "./args/DeleteOneSongAuthorArgs";
import { SongAuthor } from "../../../models/SongAuthor";
export declare class DeleteOneSongAuthorResolver {
    deleteOneSongAuthor(ctx: any, info: GraphQLResolveInfo, args: DeleteOneSongAuthorArgs): Promise<SongAuthor | null>;
}
