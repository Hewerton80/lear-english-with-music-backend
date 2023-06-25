import { SongAuthorCreateManySongInputEnvelope } from "../inputs/SongAuthorCreateManySongInputEnvelope";
import { SongAuthorCreateOrConnectWithoutSongInput } from "../inputs/SongAuthorCreateOrConnectWithoutSongInput";
import { SongAuthorCreateWithoutSongInput } from "../inputs/SongAuthorCreateWithoutSongInput";
import { SongAuthorScalarWhereInput } from "../inputs/SongAuthorScalarWhereInput";
import { SongAuthorUpdateManyWithWhereWithoutSongInput } from "../inputs/SongAuthorUpdateManyWithWhereWithoutSongInput";
import { SongAuthorUpdateWithWhereUniqueWithoutSongInput } from "../inputs/SongAuthorUpdateWithWhereUniqueWithoutSongInput";
import { SongAuthorUpsertWithWhereUniqueWithoutSongInput } from "../inputs/SongAuthorUpsertWithWhereUniqueWithoutSongInput";
import { SongAuthorWhereUniqueInput } from "../inputs/SongAuthorWhereUniqueInput";
export declare class SongAuthorUpdateManyWithoutSongNestedInput {
    create?: SongAuthorCreateWithoutSongInput[] | undefined;
    connectOrCreate?: SongAuthorCreateOrConnectWithoutSongInput[] | undefined;
    upsert?: SongAuthorUpsertWithWhereUniqueWithoutSongInput[] | undefined;
    createMany?: SongAuthorCreateManySongInputEnvelope | undefined;
    set?: SongAuthorWhereUniqueInput[] | undefined;
    disconnect?: SongAuthorWhereUniqueInput[] | undefined;
    delete?: SongAuthorWhereUniqueInput[] | undefined;
    connect?: SongAuthorWhereUniqueInput[] | undefined;
    update?: SongAuthorUpdateWithWhereUniqueWithoutSongInput[] | undefined;
    updateMany?: SongAuthorUpdateManyWithWhereWithoutSongInput[] | undefined;
    deleteMany?: SongAuthorScalarWhereInput[] | undefined;
}
