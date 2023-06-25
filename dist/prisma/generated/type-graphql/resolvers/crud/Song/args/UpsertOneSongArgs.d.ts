import { SongCreateInput } from "../../../inputs/SongCreateInput";
import { SongUpdateInput } from "../../../inputs/SongUpdateInput";
import { SongWhereUniqueInput } from "../../../inputs/SongWhereUniqueInput";
export declare class UpsertOneSongArgs {
    where: SongWhereUniqueInput;
    create: SongCreateInput;
    update: SongUpdateInput;
}
