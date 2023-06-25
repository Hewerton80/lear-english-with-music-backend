import type { GraphQLResolveInfo } from "graphql";
import { UpdateManyAuthorArgs } from "./args/UpdateManyAuthorArgs";
import { AffectedRowsOutput } from "../../outputs/AffectedRowsOutput";
export declare class UpdateManyAuthorResolver {
    updateManyAuthor(ctx: any, info: GraphQLResolveInfo, args: UpdateManyAuthorArgs): Promise<AffectedRowsOutput>;
}
