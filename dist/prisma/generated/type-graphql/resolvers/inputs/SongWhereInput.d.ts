import { DateTimeFilter } from "../inputs/DateTimeFilter";
import { SongAuthorListRelationFilter } from "../inputs/SongAuthorListRelationFilter";
import { StringFilter } from "../inputs/StringFilter";
import { StringNullableFilter } from "../inputs/StringNullableFilter";
export declare class SongWhereInput {
    AND?: SongWhereInput[] | undefined;
    OR?: SongWhereInput[] | undefined;
    NOT?: SongWhereInput[] | undefined;
    id?: StringFilter | undefined;
    title?: StringFilter | undefined;
    slug?: StringFilter | undefined;
    url?: StringFilter | undefined;
    lyric?: StringNullableFilter | undefined;
    createdAt?: DateTimeFilter | undefined;
    authors?: SongAuthorListRelationFilter | undefined;
}
