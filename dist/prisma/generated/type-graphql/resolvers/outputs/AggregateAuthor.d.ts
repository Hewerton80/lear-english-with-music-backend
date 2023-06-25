import { AuthorCountAggregate } from "../outputs/AuthorCountAggregate";
import { AuthorMaxAggregate } from "../outputs/AuthorMaxAggregate";
import { AuthorMinAggregate } from "../outputs/AuthorMinAggregate";
export declare class AggregateAuthor {
    _count: AuthorCountAggregate | null;
    _min: AuthorMinAggregate | null;
    _max: AuthorMaxAggregate | null;
}
