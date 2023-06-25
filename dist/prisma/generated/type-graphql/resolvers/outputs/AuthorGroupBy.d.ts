import { AuthorCountAggregate } from "../outputs/AuthorCountAggregate";
import { AuthorMaxAggregate } from "../outputs/AuthorMaxAggregate";
import { AuthorMinAggregate } from "../outputs/AuthorMinAggregate";
export declare class AuthorGroupBy {
    id: string;
    name: string;
    slug: string;
    createdAt: Date;
    _count: AuthorCountAggregate | null;
    _min: AuthorMinAggregate | null;
    _max: AuthorMaxAggregate | null;
}
