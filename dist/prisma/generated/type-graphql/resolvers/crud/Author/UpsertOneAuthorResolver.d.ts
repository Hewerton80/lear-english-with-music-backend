import type { GraphQLResolveInfo } from "graphql";
import { UpsertOneAuthorArgs } from "./args/UpsertOneAuthorArgs";
import { Author } from "../../../models/Author";
export declare class UpsertOneAuthorResolver {
    upsertOneAuthor(ctx: any, info: GraphQLResolveInfo, args: UpsertOneAuthorArgs): Promise<Author>;
}
