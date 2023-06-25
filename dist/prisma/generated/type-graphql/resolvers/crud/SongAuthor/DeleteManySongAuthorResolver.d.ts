import type { GraphQLResolveInfo } from "graphql";
import { DeleteManySongAuthorArgs } from "./args/DeleteManySongAuthorArgs";
import { AffectedRowsOutput } from "../../outputs/AffectedRowsOutput";
export declare class DeleteManySongAuthorResolver {
    deleteManySongAuthor(ctx: any, info: GraphQLResolveInfo, args: DeleteManySongAuthorArgs): Promise<AffectedRowsOutput>;
}
