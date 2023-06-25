import { AuthorCreateOrConnectWithoutSongsInput } from "../inputs/AuthorCreateOrConnectWithoutSongsInput";
import { AuthorCreateWithoutSongsInput } from "../inputs/AuthorCreateWithoutSongsInput";
import { AuthorWhereUniqueInput } from "../inputs/AuthorWhereUniqueInput";
export declare class AuthorCreateNestedOneWithoutSongsInput {
    create?: AuthorCreateWithoutSongsInput | undefined;
    connectOrCreate?: AuthorCreateOrConnectWithoutSongsInput | undefined;
    connect?: AuthorWhereUniqueInput | undefined;
}
