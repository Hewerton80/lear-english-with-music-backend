import type { GraphQLResolveInfo } from "graphql";
import { UpdateManySongAuthorArgs } from "./args/UpdateManySongAuthorArgs";
import { AffectedRowsOutput } from "../../outputs/AffectedRowsOutput";
export declare class UpdateManySongAuthorResolver {
    updateManySongAuthor(ctx: any, info: GraphQLResolveInfo, args: UpdateManySongAuthorArgs): Promise<AffectedRowsOutput>;
}
