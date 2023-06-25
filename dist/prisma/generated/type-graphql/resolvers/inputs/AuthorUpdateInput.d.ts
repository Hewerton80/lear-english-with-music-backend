import { SongAuthorUpdateManyWithoutAuthorNestedInput } from "../inputs/SongAuthorUpdateManyWithoutAuthorNestedInput";
export declare class AuthorUpdateInput {
    id?: string | undefined;
    name?: string | undefined;
    createdAt?: Date | undefined;
    songs?: SongAuthorUpdateManyWithoutAuthorNestedInput | undefined;
}
