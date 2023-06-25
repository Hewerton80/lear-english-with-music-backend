import type { GraphQLResolveInfo } from "graphql";
import { DeleteManySongArgs } from "./args/DeleteManySongArgs";
import { AffectedRowsOutput } from "../../outputs/AffectedRowsOutput";
export declare class DeleteManySongResolver {
    deleteManySong(ctx: any, info: GraphQLResolveInfo, args: DeleteManySongArgs): Promise<AffectedRowsOutput>;
}
