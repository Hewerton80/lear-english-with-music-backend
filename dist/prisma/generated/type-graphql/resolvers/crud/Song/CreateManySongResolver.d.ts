import type { GraphQLResolveInfo } from "graphql";
import { CreateManySongArgs } from "./args/CreateManySongArgs";
import { AffectedRowsOutput } from "../../outputs/AffectedRowsOutput";
export declare class CreateManySongResolver {
    createManySong(ctx: any, info: GraphQLResolveInfo, args: CreateManySongArgs): Promise<AffectedRowsOutput>;
}
