import { SongCountAggregate } from "../outputs/SongCountAggregate";
import { SongMaxAggregate } from "../outputs/SongMaxAggregate";
import { SongMinAggregate } from "../outputs/SongMinAggregate";
export declare class AggregateSong {
    _count: SongCountAggregate | null;
    _min: SongMinAggregate | null;
    _max: SongMaxAggregate | null;
}
