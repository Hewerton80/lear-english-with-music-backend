import { FindUniqueAuthorArgs, AuthorOrderByWithRelationInput, AuthorWhereInput, AuthorCreateInput, AuthorUpdateInput, AuthorWhereUniqueInput } from '../../prisma/generated/type-graphql';
import { PaginationInput } from '../../common/inputs/pagination.inputs';
import { AuthorService } from './author.service';
import './author.validations-enhace-map';
export declare class AuthorResolver {
    private readonly authorService;
    constructor(authorService: AuthorService);
    author(findUniqueAuthorArgs?: FindUniqueAuthorArgs): Promise<import(".prisma/client").Author>;
    authors(paginationInput: PaginationInput, orderBy?: AuthorOrderByWithRelationInput, where?: AuthorWhereInput): Promise<import("../../helpers/getPrismaPagination").IPaginatedResult<import(".prisma/client").Author>>;
    createAuthor(authorCreateInput: AuthorCreateInput): Promise<import(".prisma/client").Author>;
    updateAuthor(data: AuthorUpdateInput, where: AuthorWhereUniqueInput): Promise<import(".prisma/client").Author>;
}
