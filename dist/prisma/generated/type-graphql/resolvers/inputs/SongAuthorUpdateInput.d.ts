import { AuthorUpdateOneRequiredWithoutSongsNestedInput } from "../inputs/AuthorUpdateOneRequiredWithoutSongsNestedInput";
import { SongUpdateOneRequiredWithoutAuthorsNestedInput } from "../inputs/SongUpdateOneRequiredWithoutAuthorsNestedInput";
export declare class SongAuthorUpdateInput {
    createdAt?: Date | undefined;
    author?: AuthorUpdateOneRequiredWithoutSongsNestedInput | undefined;
    song?: SongUpdateOneRequiredWithoutAuthorsNestedInput | undefined;
}
