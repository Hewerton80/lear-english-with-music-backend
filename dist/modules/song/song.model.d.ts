import { Pagination } from '../../common/resolvers/pagination.resolver';
import { Song as PrismaSong } from '@prisma/client';
export declare class PaginedSong extends Pagination {
    docs: PrismaSong[];
}
