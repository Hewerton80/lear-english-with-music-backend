import { SongCountOrderByAggregateInput } from "../inputs/SongCountOrderByAggregateInput";
import { SongMaxOrderByAggregateInput } from "../inputs/SongMaxOrderByAggregateInput";
import { SongMinOrderByAggregateInput } from "../inputs/SongMinOrderByAggregateInput";
import { SortOrderInput } from "../inputs/SortOrderInput";
export declare class SongOrderByWithAggregationInput {
    id?: "asc" | "desc" | undefined;
    title?: "asc" | "desc" | undefined;
    slug?: "asc" | "desc" | undefined;
    url?: "asc" | "desc" | undefined;
    lyric?: SortOrderInput | undefined;
    createdAt?: "asc" | "desc" | undefined;
    _count?: SongCountOrderByAggregateInput | undefined;
    _max?: SongMaxOrderByAggregateInput | undefined;
    _min?: SongMinOrderByAggregateInput | undefined;
}
