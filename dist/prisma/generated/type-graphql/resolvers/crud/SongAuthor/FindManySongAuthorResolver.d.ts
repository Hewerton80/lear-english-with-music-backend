import type { GraphQLResolveInfo } from "graphql";
import { FindManySongAuthorArgs } from "./args/FindManySongAuthorArgs";
import { SongAuthor } from "../../../models/SongAuthor";
export declare class FindManySongAuthorResolver {
    songAuthors(ctx: any, info: GraphQLResolveInfo, args: FindManySongAuthorArgs): Promise<SongAuthor[]>;
}
