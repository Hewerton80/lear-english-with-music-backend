import type { GraphQLResolveInfo } from "graphql";
import { FindFirstAuthorArgs } from "./args/FindFirstAuthorArgs";
import { Author } from "../../../models/Author";
export declare class FindFirstAuthorResolver {
    findFirstAuthor(ctx: any, info: GraphQLResolveInfo, args: FindFirstAuthorArgs): Promise<Author | null>;
}
