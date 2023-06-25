import { SongAuthorCreateNestedManyWithoutAuthorInput } from "../inputs/SongAuthorCreateNestedManyWithoutAuthorInput";
export declare class AuthorCreateInput {
    id?: string | undefined;
    name: string;
    createdAt?: Date | undefined;
    songs?: SongAuthorCreateNestedManyWithoutAuthorInput | undefined;
}
