import { DateTimeWithAggregatesFilter } from "../inputs/DateTimeWithAggregatesFilter";
import { StringNullableWithAggregatesFilter } from "../inputs/StringNullableWithAggregatesFilter";
import { StringWithAggregatesFilter } from "../inputs/StringWithAggregatesFilter";
export declare class SongScalarWhereWithAggregatesInput {
    AND?: SongScalarWhereWithAggregatesInput[] | undefined;
    OR?: SongScalarWhereWithAggregatesInput[] | undefined;
    NOT?: SongScalarWhereWithAggregatesInput[] | undefined;
    id?: StringWithAggregatesFilter | undefined;
    title?: StringWithAggregatesFilter | undefined;
    slug?: StringWithAggregatesFilter | undefined;
    url?: StringWithAggregatesFilter | undefined;
    lyric?: StringNullableWithAggregatesFilter | undefined;
    createdAt?: DateTimeWithAggregatesFilter | undefined;
}
