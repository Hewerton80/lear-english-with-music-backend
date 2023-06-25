import { DateTimeWithAggregatesFilter } from "../inputs/DateTimeWithAggregatesFilter";
import { StringWithAggregatesFilter } from "../inputs/StringWithAggregatesFilter";
export declare class SongAuthorScalarWhereWithAggregatesInput {
    AND?: SongAuthorScalarWhereWithAggregatesInput[] | undefined;
    OR?: SongAuthorScalarWhereWithAggregatesInput[] | undefined;
    NOT?: SongAuthorScalarWhereWithAggregatesInput[] | undefined;
    authorId?: StringWithAggregatesFilter | undefined;
    songId?: StringWithAggregatesFilter | undefined;
    createdAt?: DateTimeWithAggregatesFilter | undefined;
}
