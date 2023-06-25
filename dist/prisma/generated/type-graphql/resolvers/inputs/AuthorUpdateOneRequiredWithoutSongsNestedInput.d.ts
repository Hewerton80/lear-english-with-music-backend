import { AuthorCreateOrConnectWithoutSongsInput } from "../inputs/AuthorCreateOrConnectWithoutSongsInput";
import { AuthorCreateWithoutSongsInput } from "../inputs/AuthorCreateWithoutSongsInput";
import { AuthorUpdateWithoutSongsInput } from "../inputs/AuthorUpdateWithoutSongsInput";
import { AuthorUpsertWithoutSongsInput } from "../inputs/AuthorUpsertWithoutSongsInput";
import { AuthorWhereUniqueInput } from "../inputs/AuthorWhereUniqueInput";
export declare class AuthorUpdateOneRequiredWithoutSongsNestedInput {
    create?: AuthorCreateWithoutSongsInput | undefined;
    connectOrCreate?: AuthorCreateOrConnectWithoutSongsInput | undefined;
    upsert?: AuthorUpsertWithoutSongsInput | undefined;
    connect?: AuthorWhereUniqueInput | undefined;
    update?: AuthorUpdateWithoutSongsInput | undefined;
}
