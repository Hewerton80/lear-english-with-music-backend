import { SongAuthorCreateNestedManyWithoutSongInput } from "../inputs/SongAuthorCreateNestedManyWithoutSongInput";
export declare class SongCreateInput {
    id?: string | undefined;
    title: string;
    url: string;
    lyric?: string | undefined;
    createdAt?: Date | undefined;
    authors?: SongAuthorCreateNestedManyWithoutSongInput | undefined;
}
