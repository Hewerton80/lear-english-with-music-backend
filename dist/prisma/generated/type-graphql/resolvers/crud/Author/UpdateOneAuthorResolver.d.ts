import type { GraphQLResolveInfo } from "graphql";
import { UpdateOneAuthorArgs } from "./args/UpdateOneAuthorArgs";
import { Author } from "../../../models/Author";
export declare class UpdateOneAuthorResolver {
    updateOneAuthor(ctx: any, info: GraphQLResolveInfo, args: UpdateOneAuthorArgs): Promise<Author | null>;
}
