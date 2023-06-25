import type { GraphQLResolveInfo } from "graphql";
import { DeleteOneAuthorArgs } from "./args/DeleteOneAuthorArgs";
import { Author } from "../../../models/Author";
export declare class DeleteOneAuthorResolver {
    deleteOneAuthor(ctx: any, info: GraphQLResolveInfo, args: DeleteOneAuthorArgs): Promise<Author | null>;
}
