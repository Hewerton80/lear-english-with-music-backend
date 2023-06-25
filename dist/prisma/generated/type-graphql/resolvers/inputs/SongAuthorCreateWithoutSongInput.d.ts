import { AuthorCreateNestedOneWithoutSongsInput } from "../inputs/AuthorCreateNestedOneWithoutSongsInput";
export declare class SongAuthorCreateWithoutSongInput {
    createdAt?: Date | undefined;
    author: AuthorCreateNestedOneWithoutSongsInput;
}
