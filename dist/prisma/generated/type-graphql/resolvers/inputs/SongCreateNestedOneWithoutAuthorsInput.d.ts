import { SongCreateOrConnectWithoutAuthorsInput } from "../inputs/SongCreateOrConnectWithoutAuthorsInput";
import { SongCreateWithoutAuthorsInput } from "../inputs/SongCreateWithoutAuthorsInput";
import { SongWhereUniqueInput } from "../inputs/SongWhereUniqueInput";
export declare class SongCreateNestedOneWithoutAuthorsInput {
    create?: SongCreateWithoutAuthorsInput | undefined;
    connectOrCreate?: SongCreateOrConnectWithoutAuthorsInput | undefined;
    connect?: SongWhereUniqueInput | undefined;
}
