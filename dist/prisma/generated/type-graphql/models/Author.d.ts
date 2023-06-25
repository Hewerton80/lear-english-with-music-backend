import { SongAuthor } from "../models/SongAuthor";
import { AuthorCount } from "../resolvers/outputs/AuthorCount";
export declare class Author {
    id: string;
    name: string;
    slug: string;
    songs?: SongAuthor[];
    createdAt: Date;
    _count?: AuthorCount | null;
}
