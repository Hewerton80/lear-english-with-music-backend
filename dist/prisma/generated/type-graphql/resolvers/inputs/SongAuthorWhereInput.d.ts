import { AuthorRelationFilter } from "../inputs/AuthorRelationFilter";
import { DateTimeFilter } from "../inputs/DateTimeFilter";
import { SongRelationFilter } from "../inputs/SongRelationFilter";
import { StringFilter } from "../inputs/StringFilter";
export declare class SongAuthorWhereInput {
    AND?: SongAuthorWhereInput[] | undefined;
    OR?: SongAuthorWhereInput[] | undefined;
    NOT?: SongAuthorWhereInput[] | undefined;
    authorId?: StringFilter | undefined;
    songId?: StringFilter | undefined;
    createdAt?: DateTimeFilter | undefined;
    author?: AuthorRelationFilter | undefined;
    song?: SongRelationFilter | undefined;
}
