import type { GraphQLResolveInfo } from "graphql";
import { FindUniqueAuthorOrThrowArgs } from "./args/FindUniqueAuthorOrThrowArgs";
import { Author } from "../../../models/Author";
export declare class FindUniqueAuthorOrThrowResolver {
    getAuthor(ctx: any, info: GraphQLResolveInfo, args: FindUniqueAuthorOrThrowArgs): Promise<Author | null>;
}
