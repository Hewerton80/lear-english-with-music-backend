import type { GraphQLResolveInfo } from "graphql";
import { FindManyAuthorArgs } from "./args/FindManyAuthorArgs";
import { Author } from "../../../models/Author";
export declare class FindManyAuthorResolver {
    authors(ctx: any, info: GraphQLResolveInfo, args: FindManyAuthorArgs): Promise<Author[]>;
}
