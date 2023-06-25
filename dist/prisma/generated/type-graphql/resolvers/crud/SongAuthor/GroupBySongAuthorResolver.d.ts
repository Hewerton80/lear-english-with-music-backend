import type { GraphQLResolveInfo } from "graphql";
import { GroupBySongAuthorArgs } from "./args/GroupBySongAuthorArgs";
import { SongAuthorGroupBy } from "../../outputs/SongAuthorGroupBy";
export declare class GroupBySongAuthorResolver {
    groupBySongAuthor(ctx: any, info: GraphQLResolveInfo, args: GroupBySongAuthorArgs): Promise<SongAuthorGroupBy[]>;
}
