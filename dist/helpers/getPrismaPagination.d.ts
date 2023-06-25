export interface IPaginatedResult<DocsType> {
    docs: DocsType[];
    total: number;
    currentPage: number;
    perPage: number;
    lastPage: number;
    prev: number;
    next: number;
}
interface IPaginateArgs {
    currentPage?: number | string;
    perPage?: number | string;
}
interface IPaginateFunctionArgs<WhereInput, OrderInput> {
    model: any;
    where?: WhereInput;
    orderBy?: OrderInput;
    paginationInput?: IPaginateArgs;
}
export declare const prismaPagination: <DocsType, WhereInput, OrderInput>({ model, where, orderBy, paginationInput, }: IPaginateFunctionArgs<WhereInput, OrderInput>) => Promise<IPaginatedResult<DocsType>>;
export {};
