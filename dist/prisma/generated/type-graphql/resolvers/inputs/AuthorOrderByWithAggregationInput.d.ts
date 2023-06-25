import { AuthorCountOrderByAggregateInput } from "../inputs/AuthorCountOrderByAggregateInput";
import { AuthorMaxOrderByAggregateInput } from "../inputs/AuthorMaxOrderByAggregateInput";
import { AuthorMinOrderByAggregateInput } from "../inputs/AuthorMinOrderByAggregateInput";
export declare class AuthorOrderByWithAggregationInput {
    id?: "asc" | "desc" | undefined;
    name?: "asc" | "desc" | undefined;
    slug?: "asc" | "desc" | undefined;
    createdAt?: "asc" | "desc" | undefined;
    _count?: AuthorCountOrderByAggregateInput | undefined;
    _max?: AuthorMaxOrderByAggregateInput | undefined;
    _min?: AuthorMinOrderByAggregateInput | undefined;
}
