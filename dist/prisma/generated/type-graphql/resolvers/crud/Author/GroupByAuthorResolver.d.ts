import type { GraphQLResolveInfo } from "graphql";
import { GroupByAuthorArgs } from "./args/GroupByAuthorArgs";
import { AuthorGroupBy } from "../../outputs/AuthorGroupBy";
export declare class GroupByAuthorResolver {
    groupByAuthor(ctx: any, info: GraphQLResolveInfo, args: GroupByAuthorArgs): Promise<AuthorGroupBy[]>;
}
