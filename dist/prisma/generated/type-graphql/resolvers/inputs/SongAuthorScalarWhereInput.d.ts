import { DateTimeFilter } from "../inputs/DateTimeFilter";
import { StringFilter } from "../inputs/StringFilter";
export declare class SongAuthorScalarWhereInput {
    AND?: SongAuthorScalarWhereInput[] | undefined;
    OR?: SongAuthorScalarWhereInput[] | undefined;
    NOT?: SongAuthorScalarWhereInput[] | undefined;
    authorId?: StringFilter | undefined;
    songId?: StringFilter | undefined;
    createdAt?: DateTimeFilter | undefined;
}
