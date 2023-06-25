import { AuthorOrderByWithRelationInput } from "../../../inputs/AuthorOrderByWithRelationInput";
import { AuthorWhereInput } from "../../../inputs/AuthorWhereInput";
import { AuthorWhereUniqueInput } from "../../../inputs/AuthorWhereUniqueInput";
export declare class FindManyAuthorArgs {
    where?: AuthorWhereInput | undefined;
    orderBy?: AuthorOrderByWithRelationInput[] | undefined;
    cursor?: AuthorWhereUniqueInput | undefined;
    take?: number | undefined;
    skip?: number | undefined;
    distinct?: Array<"id" | "name" | "slug" | "createdAt"> | undefined;
}
