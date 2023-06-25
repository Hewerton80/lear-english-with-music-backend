import { SongOrderByWithAggregationInput } from "../../../inputs/SongOrderByWithAggregationInput";
import { SongScalarWhereWithAggregatesInput } from "../../../inputs/SongScalarWhereWithAggregatesInput";
import { SongWhereInput } from "../../../inputs/SongWhereInput";
export declare class GroupBySongArgs {
    where?: SongWhereInput | undefined;
    orderBy?: SongOrderByWithAggregationInput[] | undefined;
    by: Array<"id" | "title" | "slug" | "url" | "lyric" | "createdAt">;
    having?: SongScalarWhereWithAggregatesInput | undefined;
    take?: number | undefined;
    skip?: number | undefined;
}
