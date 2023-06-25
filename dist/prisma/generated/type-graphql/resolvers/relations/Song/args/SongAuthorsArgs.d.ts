import { SongAuthorOrderByWithRelationInput } from "../../../inputs/SongAuthorOrderByWithRelationInput";
import { SongAuthorWhereInput } from "../../../inputs/SongAuthorWhereInput";
import { SongAuthorWhereUniqueInput } from "../../../inputs/SongAuthorWhereUniqueInput";
export declare class SongAuthorsArgs {
    where?: SongAuthorWhereInput | undefined;
    orderBy?: SongAuthorOrderByWithRelationInput[] | undefined;
    cursor?: SongAuthorWhereUniqueInput | undefined;
    take?: number | undefined;
    skip?: number | undefined;
    distinct?: Array<"authorId" | "songId" | "createdAt"> | undefined;
}
