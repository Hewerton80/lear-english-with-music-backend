import { Author } from "../models/Author";
import { Song } from "../models/Song";
export declare class SongAuthor {
    authorId: string;
    author?: Author;
    songId: string;
    song?: Song;
    createdAt: Date;
}
