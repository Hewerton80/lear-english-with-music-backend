import { FindUniqueAuthorArgs, AuthorOrderByWithRelationInput, AuthorWhereInput, AuthorCreateInput, AuthorUpdateInput, AuthorWhereUniqueInput } from '../../prisma/generated/type-graphql';
import { PaginationInput } from '../../common/inputs/pagination.inputs';
import { Author as PrismaAuthor } from '@prisma/client';
export declare class AuthorService {
    private readonly ctx;
    constructor(ctx: ApolloContext);
    private checkIfNameOrSlugAuthorAlreadyExists;
    findMany({ paginationInput, orderBy, where, }: {
        paginationInput?: PaginationInput;
        orderBy?: AuthorOrderByWithRelationInput;
        where?: AuthorWhereInput;
    }): Promise<import("../../helpers/getPrismaPagination").IPaginatedResult<PrismaAuthor>>;
    count(authorWhereInput: AuthorWhereInput): Promise<number>;
    findOne(findUniqueAuthorArgs?: FindUniqueAuthorArgs): Promise<PrismaAuthor>;
    create({ name }: AuthorCreateInput): Promise<PrismaAuthor>;
    update({ name }: AuthorUpdateInput, where: AuthorWhereUniqueInput): Promise<PrismaAuthor>;
}
