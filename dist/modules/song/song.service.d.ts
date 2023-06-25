import { FindUniqueSongArgs, SongCreateWithoutAuthorsInput, SongOrderByWithRelationInput, SongUpdateWithoutAuthorsInput, SongWhereInput, SongWhereUniqueInput } from '../../prisma/generated/type-graphql';
import { PaginationInput } from '../../common/inputs/pagination.inputs';
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
    }): Promise<import("../../helpers/getPrismaPagination").IPaginatedResult<import("../../prisma/generated/type-prisma/runtime").GetResult<{
        id: string;
        title: string;
        slug: string;
        url: string;
        lyric: string;
        createdAt: Date;
    }, unknown> & {}>>;
    findOne(findUniqueSongArgs?: FindUniqueSongArgs): Promise<import("../../prisma/generated/type-prisma/runtime").GetResult<{
        id: string;
        title: string;
        slug: string;
        url: string;
        lyric: string;
        createdAt: Date;
    }, unknown> & {}>;
    create({ songCreateWithoutAuthorsInput, authorIds, }: {
        songCreateWithoutAuthorsInput: SongCreateWithoutAuthorsInput;
        authorIds: string[];
    }): Promise<import("../../prisma/generated/type-prisma/runtime").GetResult<{
        id: string;
        title: string;
        slug: string;
        url: string;
        lyric: string;
        createdAt: Date;
    }, unknown> & {}>;
    update({ songUpdateWithoutAuthorsInput, authorIds, songWhereUniqueInput, }: {
        songUpdateWithoutAuthorsInput: SongUpdateWithoutAuthorsInput;
        authorIds: string[];
        songWhereUniqueInput: SongWhereUniqueInput;
    }): Promise<import("../../prisma/generated/type-prisma/runtime").GetResult<{
        id: string;
        title: string;
        slug: string;
        url: string;
        lyric: string;
        createdAt: Date;
    }, unknown> & {}>;
}
