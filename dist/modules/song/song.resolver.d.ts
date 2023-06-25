import { FindUniqueSongArgs, Song, SongCreateWithoutAuthorsInput, SongOrderByWithRelationInput, SongUpdateWithoutAuthorsInput, SongWhereInput, SongWhereUniqueInput } from '../../prisma/generated/type-graphql';
import { PaginationInput } from '../../common/inputs/pagination.inputs';
import { SongService } from './song.service';
import { ArrayIds } from '../../common/inputs/array-ids.input';
import './song.validations-enhace-map';
export declare class SongResolver {
    private readonly songService;
    constructor(songService: SongService);
    songs(paginationInput: PaginationInput, orderBy?: SongOrderByWithRelationInput, where?: SongWhereInput): Promise<import("../../helpers/getPrismaPagination").IPaginatedResult<import("../../prisma/generated/type-prisma/runtime").GetResult<{
        id: string;
        title: string;
        slug: string;
        url: string;
        lyric: string;
        createdAt: Date;
    }, unknown> & {}>>;
    song(findUniqueSongArgs?: FindUniqueSongArgs): Promise<import("../../prisma/generated/type-prisma/runtime").GetResult<{
        id: string;
        title: string;
        slug: string;
        url: string;
        lyric: string;
        createdAt: Date;
    }, unknown> & {}>;
    authors(song: Song, ctx: ApolloContext): import("../../prisma/generated/type-prisma").Prisma.PrismaPromise<(import("../../prisma/generated/type-prisma/runtime").GetResult<{
        id: string;
        name: string;
        slug: string;
        createdAt: Date;
    }, unknown> & {})[]>;
    createSong(songCreateWithoutAuthorsInput: SongCreateWithoutAuthorsInput, { values }: ArrayIds): Promise<import("../../prisma/generated/type-prisma/runtime").GetResult<{
        id: string;
        title: string;
        slug: string;
        url: string;
        lyric: string;
        createdAt: Date;
    }, unknown> & {}>;
    updateSong(songUpdateWithoutAuthorsInput: SongUpdateWithoutAuthorsInput, songWhereUniqueInput: SongWhereUniqueInput, { values }: ArrayIds): Promise<import("../../prisma/generated/type-prisma/runtime").GetResult<{
        id: string;
        title: string;
        slug: string;
        url: string;
        lyric: string;
        createdAt: Date;
    }, unknown> & {}>;
}
