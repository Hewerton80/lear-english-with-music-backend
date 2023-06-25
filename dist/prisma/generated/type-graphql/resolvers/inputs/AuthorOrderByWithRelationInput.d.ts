import { SongAuthorOrderByRelationAggregateInput } from "../inputs/SongAuthorOrderByRelationAggregateInput";
export declare class AuthorOrderByWithRelationInput {
    id?: "asc" | "desc" | undefined;
    name?: "asc" | "desc" | undefined;
    slug?: "asc" | "desc" | undefined;
    createdAt?: "asc" | "desc" | undefined;
    songs?: SongAuthorOrderByRelationAggregateInput | undefined;
}
