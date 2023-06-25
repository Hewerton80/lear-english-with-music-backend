import { AuthorCountSongsArgs } from "./args/AuthorCountSongsArgs";
export declare class AuthorCount {
    songs: number;
    getSongs(root: AuthorCount, args: AuthorCountSongsArgs): number;
}
