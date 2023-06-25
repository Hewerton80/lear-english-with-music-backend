import { FindUniqueSongArgs, SongCreateWithoutAuthorsInput, SongOrderByWithRelationInput, SongUpdateWithoutAuthorsInput, SongWhereInput, SongWhereUniqueInput } from '../../prisma/generated/type-graphql';
import { PaginationInput } from '../../common/inputs/pagination.inputs';
import { Song as PrismaSong } from '@prisma/client';
import { AuthorService } from '../author/author.service';
export declare class SongService {
    private readonly ctx;
    private readonly authorService;
    constructor(ctx: ApolloContext, authorService: AuthorService);
    private checkIfNameOrSlugSongAlreadyExists;
    private checkIfSomeAuthorNotExists;
    findMany({ paginationInput, where, orderBy, }: {
        paginationInput?: PaginationInput;
        where?: SongWhereInput;
        orderBy?: SongOrderByWithRelationInput;
    }): Promise<import("../../helpers/getPrismaPagination").IPaginatedResult<PrismaSong>>;
    findOne(findUniqueSongArgs?: FindUniqueSongArgs): Promise<PrismaSong>;
    create({ songCreateWithoutAuthorsInput, authorIds, }: {
        songCreateWithoutAuthorsInput: SongCreateWithoutAuthorsInput;
        authorIds: string[];
    }): Promise<PrismaSong>;
    update({ songUpdateWithoutAuthorsInput, authorIds, songWhereUniqueInput, }: {
        songUpdateWithoutAuthorsInput: SongUpdateWithoutAuthorsInput;
        authorIds: string[];
        songWhereUniqueInput: SongWhereUniqueInput;
    }): Promise<PrismaSong>;
}
