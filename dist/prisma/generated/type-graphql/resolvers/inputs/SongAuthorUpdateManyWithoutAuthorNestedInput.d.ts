import { SongAuthorCreateManyAuthorInputEnvelope } from "../inputs/SongAuthorCreateManyAuthorInputEnvelope";
import { SongAuthorCreateOrConnectWithoutAuthorInput } from "../inputs/SongAuthorCreateOrConnectWithoutAuthorInput";
import { SongAuthorCreateWithoutAuthorInput } from "../inputs/SongAuthorCreateWithoutAuthorInput";
import { SongAuthorScalarWhereInput } from "../inputs/SongAuthorScalarWhereInput";
import { SongAuthorUpdateManyWithWhereWithoutAuthorInput } from "../inputs/SongAuthorUpdateManyWithWhereWithoutAuthorInput";
import { SongAuthorUpdateWithWhereUniqueWithoutAuthorInput } from "../inputs/SongAuthorUpdateWithWhereUniqueWithoutAuthorInput";
import { SongAuthorUpsertWithWhereUniqueWithoutAuthorInput } from "../inputs/SongAuthorUpsertWithWhereUniqueWithoutAuthorInput";
import { SongAuthorWhereUniqueInput } from "../inputs/SongAuthorWhereUniqueInput";
export declare class SongAuthorUpdateManyWithoutAuthorNestedInput {
    create?: SongAuthorCreateWithoutAuthorInput[] | undefined;
    connectOrCreate?: SongAuthorCreateOrConnectWithoutAuthorInput[] | undefined;
    upsert?: SongAuthorUpsertWithWhereUniqueWithoutAuthorInput[] | undefined;
    createMany?: SongAuthorCreateManyAuthorInputEnvelope | undefined;
    set?: SongAuthorWhereUniqueInput[] | undefined;
    disconnect?: SongAuthorWhereUniqueInput[] | undefined;
    delete?: SongAuthorWhereUniqueInput[] | undefined;
    connect?: SongAuthorWhereUniqueInput[] | undefined;
    update?: SongAuthorUpdateWithWhereUniqueWithoutAuthorInput[] | undefined;
    updateMany?: SongAuthorUpdateManyWithWhereWithoutAuthorInput[] | undefined;
    deleteMany?: SongAuthorScalarWhereInput[] | undefined;
}
