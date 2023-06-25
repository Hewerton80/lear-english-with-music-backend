import { SongCountAuthorsArgs } from "./args/SongCountAuthorsArgs";
export declare class SongCount {
    authors: number;
    getAuthors(root: SongCount, args: SongCountAuthorsArgs): number;
}
