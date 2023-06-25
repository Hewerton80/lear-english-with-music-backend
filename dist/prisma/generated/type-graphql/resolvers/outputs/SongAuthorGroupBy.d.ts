import { SongAuthorCountAggregate } from "../outputs/SongAuthorCountAggregate";
import { SongAuthorMaxAggregate } from "../outputs/SongAuthorMaxAggregate";
import { SongAuthorMinAggregate } from "../outputs/SongAuthorMinAggregate";
export declare class SongAuthorGroupBy {
    authorId: string;
    songId: string;
    createdAt: Date;
    _count: SongAuthorCountAggregate | null;
    _min: SongAuthorMinAggregate | null;
    _max: SongAuthorMaxAggregate | null;
}
