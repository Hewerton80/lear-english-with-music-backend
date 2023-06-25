import { SongAuthorCreateInput } from "../../../inputs/SongAuthorCreateInput";
import { SongAuthorUpdateInput } from "../../../inputs/SongAuthorUpdateInput";
import { SongAuthorWhereUniqueInput } from "../../../inputs/SongAuthorWhereUniqueInput";
export declare class UpsertOneSongAuthorArgs {
    where: SongAuthorWhereUniqueInput;
    create: SongAuthorCreateInput;
    update: SongAuthorUpdateInput;
}
