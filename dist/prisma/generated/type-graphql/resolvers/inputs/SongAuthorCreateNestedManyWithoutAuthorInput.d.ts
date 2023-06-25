import { SongAuthorCreateManyAuthorInputEnvelope } from "../inputs/SongAuthorCreateManyAuthorInputEnvelope";
import { SongAuthorCreateOrConnectWithoutAuthorInput } from "../inputs/SongAuthorCreateOrConnectWithoutAuthorInput";
import { SongAuthorCreateWithoutAuthorInput } from "../inputs/SongAuthorCreateWithoutAuthorInput";
import { SongAuthorWhereUniqueInput } from "../inputs/SongAuthorWhereUniqueInput";
export declare class SongAuthorCreateNestedManyWithoutAuthorInput {
    create?: SongAuthorCreateWithoutAuthorInput[] | undefined;
    connectOrCreate?: SongAuthorCreateOrConnectWithoutAuthorInput[] | undefined;
    createMany?: SongAuthorCreateManyAuthorInputEnvelope | undefined;
    connect?: SongAuthorWhereUniqueInput[] | undefined;
}
