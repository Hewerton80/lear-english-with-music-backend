import { SongAuthorUpdateManyWithoutSongNestedInput } from "../inputs/SongAuthorUpdateManyWithoutSongNestedInput";
export declare class SongUpdateInput {
    id?: string | undefined;
    title?: string | undefined;
    url?: string | undefined;
    lyric?: string | undefined;
    createdAt?: Date | undefined;
    authors?: SongAuthorUpdateManyWithoutSongNestedInput | undefined;
}
