import type { GraphQLResolveInfo } from "graphql";
import { AggregateSongArgs } from "./args/AggregateSongArgs";
import { AggregateSong } from "../../outputs/AggregateSong";
export declare class AggregateSongResolver {
    aggregateSong(ctx: any, info: GraphQLResolveInfo, args: AggregateSongArgs): Promise<AggregateSong>;
}
