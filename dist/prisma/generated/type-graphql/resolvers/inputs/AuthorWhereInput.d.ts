import { DateTimeFilter } from "../inputs/DateTimeFilter";
import { SongAuthorListRelationFilter } from "../inputs/SongAuthorListRelationFilter";
import { StringFilter } from "../inputs/StringFilter";
export declare class AuthorWhereInput {
    AND?: AuthorWhereInput[] | undefined;
    OR?: AuthorWhereInput[] | undefined;
    NOT?: AuthorWhereInput[] | undefined;
    id?: StringFilter | undefined;
    name?: StringFilter | undefined;
    slug?: StringFilter | undefined;
    createdAt?: DateTimeFilter | undefined;
    songs?: SongAuthorListRelationFilter | undefined;
}
