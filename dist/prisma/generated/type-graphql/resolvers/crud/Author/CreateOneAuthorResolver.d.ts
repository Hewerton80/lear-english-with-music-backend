import type { GraphQLResolveInfo } from "graphql";
import { CreateOneAuthorArgs } from "./args/CreateOneAuthorArgs";
import { Author } from "../../../models/Author";
export declare class CreateOneAuthorResolver {
    createOneAuthor(ctx: any, info: GraphQLResolveInfo, args: CreateOneAuthorArgs): Promise<Author>;
}
