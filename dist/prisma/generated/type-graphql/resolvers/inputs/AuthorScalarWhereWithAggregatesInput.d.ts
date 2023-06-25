import { DateTimeWithAggregatesFilter } from "../inputs/DateTimeWithAggregatesFilter";
import { StringWithAggregatesFilter } from "../inputs/StringWithAggregatesFilter";
export declare class AuthorScalarWhereWithAggregatesInput {
    AND?: AuthorScalarWhereWithAggregatesInput[] | undefined;
    OR?: AuthorScalarWhereWithAggregatesInput[] | undefined;
    NOT?: AuthorScalarWhereWithAggregatesInput[] | undefined;
    id?: StringWithAggregatesFilter | undefined;
    name?: StringWithAggregatesFilter | undefined;
    slug?: StringWithAggregatesFilter | undefined;
    createdAt?: DateTimeWithAggregatesFilter | undefined;
}
