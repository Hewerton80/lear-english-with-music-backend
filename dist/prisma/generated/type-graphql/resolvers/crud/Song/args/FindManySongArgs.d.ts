import { SongOrderByWithRelationInput } from "../../../inputs/SongOrderByWithRelationInput";
import { SongWhereInput } from "../../../inputs/SongWhereInput";
import { SongWhereUniqueInput } from "../../../inputs/SongWhereUniqueInput";
export declare class FindManySongArgs {
    where?: SongWhereInput | undefined;
    orderBy?: SongOrderByWithRelationInput[] | undefined;
    cursor?: SongWhereUniqueInput | undefined;
    take?: number | undefined;
    skip?: number | undefined;
    distinct?: Array<"id" | "title" | "slug" | "url" | "lyric" | "createdAt"> | undefined;
}
