import { Pagination } from '../../common/resolvers/pagination.resolver';
import { Song as PrismaSong } from '../../prisma/generated/type-prisma';
export declare class PaginedSong extends Pagination {
    docs: PrismaSong[];
}
