import { SongAuthorOrderByWithAggregationInput } from "../../../inputs/SongAuthorOrderByWithAggregationInput";
import { SongAuthorScalarWhereWithAggregatesInput } from "../../../inputs/SongAuthorScalarWhereWithAggregatesInput";
import { SongAuthorWhereInput } from "../../../inputs/SongAuthorWhereInput";
export declare class GroupBySongAuthorArgs {
    where?: SongAuthorWhereInput | undefined;
    orderBy?: SongAuthorOrderByWithAggregationInput[] | undefined;
    by: Array<"authorId" | "songId" | "createdAt">;
    having?: SongAuthorScalarWhereWithAggregatesInput | undefined;
    take?: number | undefined;
    skip?: number | undefined;
}
