import { SongAuthorCreateManySongInputEnvelope } from "../inputs/SongAuthorCreateManySongInputEnvelope";
import { SongAuthorCreateOrConnectWithoutSongInput } from "../inputs/SongAuthorCreateOrConnectWithoutSongInput";
import { SongAuthorCreateWithoutSongInput } from "../inputs/SongAuthorCreateWithoutSongInput";
import { SongAuthorWhereUniqueInput } from "../inputs/SongAuthorWhereUniqueInput";
export declare class SongAuthorCreateNestedManyWithoutSongInput {
    create?: SongAuthorCreateWithoutSongInput[] | undefined;
    connectOrCreate?: SongAuthorCreateOrConnectWithoutSongInput[] | undefined;
    createMany?: SongAuthorCreateManySongInputEnvelope | undefined;
    connect?: SongAuthorWhereUniqueInput[] | undefined;
}
