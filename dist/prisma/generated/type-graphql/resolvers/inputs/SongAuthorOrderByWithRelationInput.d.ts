import { AuthorOrderByWithRelationInput } from "../inputs/AuthorOrderByWithRelationInput";
import { SongOrderByWithRelationInput } from "../inputs/SongOrderByWithRelationInput";
export declare class SongAuthorOrderByWithRelationInput {
    authorId?: "asc" | "desc" | undefined;
    songId?: "asc" | "desc" | undefined;
    createdAt?: "asc" | "desc" | undefined;
    author?: AuthorOrderByWithRelationInput | undefined;
    song?: SongOrderByWithRelationInput | undefined;
}
