import type { GraphQLResolveInfo } from "graphql";
import { CreateOneSongAuthorArgs } from "./args/CreateOneSongAuthorArgs";
import { SongAuthor } from "../../../models/SongAuthor";
export declare class CreateOneSongAuthorResolver {
    createOneSongAuthor(ctx: any, info: GraphQLResolveInfo, args: CreateOneSongAuthorArgs): Promise<SongAuthor>;
}
