import { SongAuthorOrderByRelationAggregateInput } from "../inputs/SongAuthorOrderByRelationAggregateInput";
import { SortOrderInput } from "../inputs/SortOrderInput";
export declare class SongOrderByWithRelationInput {
    id?: "asc" | "desc" | undefined;
    title?: "asc" | "desc" | undefined;
    slug?: "asc" | "desc" | undefined;
    url?: "asc" | "desc" | undefined;
    lyric?: SortOrderInput | undefined;
    createdAt?: "asc" | "desc" | undefined;
    authors?: SongAuthorOrderByRelationAggregateInput | undefined;
}
