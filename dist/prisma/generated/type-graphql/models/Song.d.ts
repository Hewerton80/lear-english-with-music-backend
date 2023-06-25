import { SongAuthor } from "../models/SongAuthor";
import { SongCount } from "../resolvers/outputs/SongCount";
export declare class Song {
    id: string;
    title: string;
    slug: string;
    url: string;
    lyric?: string | null;
    authors?: SongAuthor[];
    createdAt: Date;
    _count?: SongCount | null;
}
