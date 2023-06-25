import { FindUniqueAuthorArgs, AuthorOrderByWithRelationInput, AuthorWhereInput, AuthorCreateInput, AuthorUpdateInput, AuthorWhereUniqueInput } from '../../prisma/generated/type-graphql';
import { PaginationInput } from '../../common/inputs/pagination.inputs';
import { AuthorService } from './author.service';
import './author.validations-enhace-map';
export declare class AuthorResolver {
    private readonly authorService;
    constructor(authorService: AuthorService);
    author(findUniqueAuthorArgs?: FindUniqueAuthorArgs): Promise<import("../../prisma/generated/type-prisma/runtime").GetResult<{
        id: string;
        name: string;
        slug: string;
        createdAt: Date;
    }, unknown> & {}>;
    authors(paginationInput: PaginationInput, orderBy?: AuthorOrderByWithRelationInput, where?: AuthorWhereInput): Promise<import("../../helpers/getPrismaPagination").IPaginatedResult<import("../../prisma/generated/type-prisma/runtime").GetResult<{
        id: string;
        name: string;
        slug: string;
        createdAt: Date;
    }, unknown> & {}>>;
    createAuthor(authorCreateInput: AuthorCreateInput): Promise<import("../../prisma/generated/type-prisma/runtime").GetResult<{
        id: string;
        name: string;
        slug: string;
        createdAt: Date;
    }, unknown> & {}>;
    updateAuthor(data: AuthorUpdateInput, where: AuthorWhereUniqueInput): Promise<import("../../prisma/generated/type-prisma/runtime").GetResult<{
        id: string;
        name: string;
        slug: string;
        createdAt: Date;
    }, unknown> & {}>;
}
