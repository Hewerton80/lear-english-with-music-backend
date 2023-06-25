import { FindUniqueSongArgs, Song, SongCreateWithoutAuthorsInput, SongOrderByWithRelationInput, SongUpdateWithoutAuthorsInput, SongWhereInput, SongWhereUniqueInput } from '../../prisma/generated/type-graphql';
import { PaginationInput } from '../../common/inputs/pagination.inputs';
import { SongService } from './song.service';
import { ArrayIds } from '../../common/inputs/array-ids.input';
import './song.validations-enhace-map';
export declare class SongResolver {
    private readonly songService;
    constructor(songService: SongService);
    songs(paginationInput: PaginationInput, orderBy?: SongOrderByWithRelationInput, where?: SongWhereInput): Promise<import("../../helpers/getPrismaPagination").IPaginatedResult<import(".prisma/client").Song>>;
    song(findUniqueSongArgs?: FindUniqueSongArgs): Promise<import(".prisma/client").Song>;
    authors(song: Song, ctx: ApolloContext): import(".prisma/client").Prisma.PrismaPromise<import(".prisma/client").Author[]>;
    createSong(songCreateWithoutAuthorsInput: SongCreateWithoutAuthorsInput, { values }: ArrayIds): Promise<import(".prisma/client").Song>;
    updateSong(songUpdateWithoutAuthorsInput: SongUpdateWithoutAuthorsInput, songWhereUniqueInput: SongWhereUniqueInput, { values }: ArrayIds): Promise<import(".prisma/client").Song>;
}
