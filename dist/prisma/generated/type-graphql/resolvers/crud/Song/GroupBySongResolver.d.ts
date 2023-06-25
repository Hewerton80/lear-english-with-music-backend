import type { GraphQLResolveInfo } from "graphql";
import { GroupBySongArgs } from "./args/GroupBySongArgs";
import { SongGroupBy } from "../../outputs/SongGroupBy";
export declare class GroupBySongResolver {
    groupBySong(ctx: any, info: GraphQLResolveInfo, args: GroupBySongArgs): Promise<SongGroupBy[]>;
}
