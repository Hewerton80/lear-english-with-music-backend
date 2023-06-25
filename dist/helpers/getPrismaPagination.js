"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.prismaPagination = void 0;
const prismaPagination = async ({ model, where, orderBy, paginationInput, }) => {
    const currentPage = Number(paginationInput === null || paginationInput === void 0 ? void 0 : paginationInput.currentPage) || 1;
    const perPage = Number(paginationInput === null || paginationInput === void 0 ? void 0 : paginationInput.perPage) || 25;
    const skip = currentPage > 0 ? perPage * (currentPage - 1) : 0;
    const totalPromise = model.count({ where });
    const docsPromise = model.findMany({
        where,
        orderBy,
        take: perPage,
        skip,
    });
    const [total, docs] = await Promise.all([totalPromise, docsPromise]);
    const lastPage = Math.ceil(total / perPage);
    const paginatedResult = {
        docs,
        total,
        lastPage,
        currentPage,
        perPage,
        prev: currentPage > 1 ? currentPage - 1 : null,
        next: currentPage < lastPage ? currentPage + 1 : null,
    };
    return paginatedResult;
};
exports.prismaPagination = prismaPagination;
//# sourceMappingURL=getPrismaPagination.js.map