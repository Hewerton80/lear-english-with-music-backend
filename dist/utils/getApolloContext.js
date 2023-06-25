"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getApolloContext = void 0;
const typedi_1 = require("typedi");
const getRandomIntInclusive_1 = require("./getRandomIntInclusive");
const getApolloContext = (prismaClient) => {
    return async ({ req }) => {
        var _a;
        const requestId = (0, getRandomIntInclusive_1.getRandomIntInclusive)(0, Number.MAX_SAFE_INTEGER);
        const container = typedi_1.default.of(requestId.toString());
        const context = {
            requestId,
            container,
            prisma: prismaClient,
            headerAuthorization: (_a = req.headers) === null || _a === void 0 ? void 0 : _a.authorization,
        };
        container.set('context', context);
        return context;
    };
};
exports.getApolloContext = getApolloContext;
//# sourceMappingURL=getApolloContext.js.map