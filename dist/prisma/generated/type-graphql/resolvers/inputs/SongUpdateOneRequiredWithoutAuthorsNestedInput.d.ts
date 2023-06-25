import { SongCreateOrConnectWithoutAuthorsInput } from "../inputs/SongCreateOrConnectWithoutAuthorsInput";
import { SongCreateWithoutAuthorsInput } from "../inputs/SongCreateWithoutAuthorsInput";
import { SongUpdateWithoutAuthorsInput } from "../inputs/SongUpdateWithoutAuthorsInput";
import { SongUpsertWithoutAuthorsInput } from "../inputs/SongUpsertWithoutAuthorsInput";
import { SongWhereUniqueInput } from "../inputs/SongWhereUniqueInput";
export declare class SongUpdateOneRequiredWithoutAuthorsNestedInput {
    create?: SongCreateWithoutAuthorsInput | undefined;
    connectOrCreate?: SongCreateOrConnectWithoutAuthorsInput | undefined;
    upsert?: SongUpsertWithoutAuthorsInput | undefined;
    connect?: SongWhereUniqueInput | undefined;
    update?: SongUpdateWithoutAuthorsInput | undefined;
}
