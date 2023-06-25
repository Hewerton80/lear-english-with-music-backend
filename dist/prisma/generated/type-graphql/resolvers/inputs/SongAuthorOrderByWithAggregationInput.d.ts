import { SongAuthorCountOrderByAggregateInput } from "../inputs/SongAuthorCountOrderByAggregateInput";
import { SongAuthorMaxOrderByAggregateInput } from "../inputs/SongAuthorMaxOrderByAggregateInput";
import { SongAuthorMinOrderByAggregateInput } from "../inputs/SongAuthorMinOrderByAggregateInput";
export declare class SongAuthorOrderByWithAggregationInput {
    authorId?: "asc" | "desc" | undefined;
    songId?: "asc" | "desc" | undefined;
    createdAt?: "asc" | "desc" | undefined;
    _count?: SongAuthorCountOrderByAggregateInput | undefined;
    _max?: SongAuthorMaxOrderByAggregateInput | undefined;
    _min?: SongAuthorMinOrderByAggregateInput | undefined;
}
