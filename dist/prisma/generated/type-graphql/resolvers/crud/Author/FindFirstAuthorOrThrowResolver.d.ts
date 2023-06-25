import type { GraphQLResolveInfo } from "graphql";
import { FindFirstAuthorOrThrowArgs } from "./args/FindFirstAuthorOrThrowArgs";
import { Author } from "../../../models/Author";
export declare class FindFirstAuthorOrThrowResolver {
    findFirstAuthorOrThrow(ctx: any, info: GraphQLResolveInfo, args: FindFirstAuthorOrThrowArgs): Promise<Author | null>;
}
