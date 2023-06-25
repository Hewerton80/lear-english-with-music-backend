import { SongCountAggregate } from "../outputs/SongCountAggregate";
import { SongMaxAggregate } from "../outputs/SongMaxAggregate";
import { SongMinAggregate } from "../outputs/SongMinAggregate";
export declare class SongGroupBy {
    id: string;
    title: string;
    slug: string;
    url: string;
    lyric: string | null;
    createdAt: Date;
    _count: SongCountAggregate | null;
    _min: SongMinAggregate | null;
    _max: SongMaxAggregate | null;
}
