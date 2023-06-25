import { Pagination } from '../../common/resolvers/pagination.resolver';
import { Author as PrismaAuthor } from '@prisma/client';
export declare class PaginedAuthor extends Pagination {
    docs: PrismaAuthor[];
}
