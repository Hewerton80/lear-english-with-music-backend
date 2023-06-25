import type { GraphQLResolveInfo } from "graphql";
import { AggregateSongAuthorArgs } from "./args/AggregateSongAuthorArgs";
import { AggregateSongAuthor } from "../../outputs/AggregateSongAuthor";
export declare class AggregateSongAuthorResolver {
    aggregateSongAuthor(ctx: any, info: GraphQLResolveInfo, args: AggregateSongAuthorArgs): Promise<AggregateSongAuthor>;
}
