import type { GraphQLResolveInfo } from "graphql";
import { UpdateManySongArgs } from "./args/UpdateManySongArgs";
import { AffectedRowsOutput } from "../../outputs/AffectedRowsOutput";
export declare class UpdateManySongResolver {
    updateManySong(ctx: any, info: GraphQLResolveInfo, args: UpdateManySongArgs): Promise<AffectedRowsOutput>;
}
