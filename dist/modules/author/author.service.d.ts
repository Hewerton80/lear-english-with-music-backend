import { FindUniqueAuthorArgs, AuthorOrderByWithRelationInput, AuthorWhereInput, AuthorCreateInput, AuthorUpdateInput, AuthorWhereUniqueInput } from '../../prisma/generated/type-graphql';
import { PaginationInput } from '../../common/inputs/pagination.inputs';
export declare class AuthorService {
    private readonly ctx;
    constructor(ctx: ApolloContext);
    private checkIfNameOrSlugAuthorAlreadyExists;
    findMany({ paginationInput, orderBy, where, }: {
        paginationInput?: PaginationInput;
        orderBy?: AuthorOrderByWithRelationInput;
        where?: AuthorWhereInput;
    }): Promise<import("../../helpers/getPrismaPagination").IPaginatedResult<import("../../prisma/generated/type-prisma/runtime").GetResult<{
        id: string;
        name: string;
        slug: string;
        createdAt: Date;
    }, unknown> & {}>>;
    count(authorWhereInput: AuthorWhereInput): Promise<number>;
    findOne(findUniqueAuthorArgs?: FindUniqueAuthorArgs): Promise<import("../../prisma/generated/type-prisma/runtime").GetResult<{
        id: string;
        name: string;
        slug: string;
        createdAt: Date;
    }, unknown> & {}>;
    create({ name }: AuthorCreateInput): Promise<import("../../prisma/generated/type-prisma/runtime").GetResult<{
        id: string;
        name: string;
        slug: string;
        createdAt: Date;
    }, unknown> & {}>;
    update({ name }: AuthorUpdateInput, where: AuthorWhereUniqueInput): Promise<import("../../prisma/generated/type-prisma/runtime").GetResult<{
        id: string;
        name: string;
        slug: string;
        createdAt: Date;
    }, unknown> & {}>;
}
