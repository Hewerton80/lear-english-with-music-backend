import { AuthorCreateNestedOneWithoutSongsInput } from "../inputs/AuthorCreateNestedOneWithoutSongsInput";
import { SongCreateNestedOneWithoutAuthorsInput } from "../inputs/SongCreateNestedOneWithoutAuthorsInput";
export declare class SongAuthorCreateInput {
    createdAt?: Date | undefined;
    author: AuthorCreateNestedOneWithoutSongsInput;
    song: SongCreateNestedOneWithoutAuthorsInput;
}
