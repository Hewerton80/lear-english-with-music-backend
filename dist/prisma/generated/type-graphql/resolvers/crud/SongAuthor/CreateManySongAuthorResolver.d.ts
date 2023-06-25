import type { GraphQLResolveInfo } from "graphql";
import { CreateManySongAuthorArgs } from "./args/CreateManySongAuthorArgs";
import { AffectedRowsOutput } from "../../outputs/AffectedRowsOutput";
export declare class CreateManySongAuthorResolver {
    createManySongAuthor(ctx: any, info: GraphQLResolveInfo, args: CreateManySongAuthorArgs): Promise<AffectedRowsOutput>;
}
