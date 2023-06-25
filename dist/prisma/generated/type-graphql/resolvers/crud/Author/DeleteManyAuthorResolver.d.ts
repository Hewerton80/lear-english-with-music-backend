import type { GraphQLResolveInfo } from "graphql";
import { DeleteManyAuthorArgs } from "./args/DeleteManyAuthorArgs";
import { AffectedRowsOutput } from "../../outputs/AffectedRowsOutput";
export declare class DeleteManyAuthorResolver {
    deleteManyAuthor(ctx: any, info: GraphQLResolveInfo, args: DeleteManyAuthorArgs): Promise<AffectedRowsOutput>;
}
