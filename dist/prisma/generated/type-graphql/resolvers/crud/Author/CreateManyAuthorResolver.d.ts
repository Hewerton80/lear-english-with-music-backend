import type { GraphQLResolveInfo } from "graphql";
import { CreateManyAuthorArgs } from "./args/CreateManyAuthorArgs";
import { AffectedRowsOutput } from "../../outputs/AffectedRowsOutput";
export declare class CreateManyAuthorResolver {
    createManyAuthor(ctx: any, info: GraphQLResolveInfo, args: CreateManyAuthorArgs): Promise<AffectedRowsOutput>;
}
