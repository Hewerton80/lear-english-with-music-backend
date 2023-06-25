import type { GraphQLResolveInfo } from "graphql";
import { FindUniqueAuthorArgs } from "./args/FindUniqueAuthorArgs";
import { Author } from "../../../models/Author";
export declare class FindUniqueAuthorResolver {
    author(ctx: any, info: GraphQLResolveInfo, args: FindUniqueAuthorArgs): Promise<Author | null>;
}
