"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.TransactionIsolationLevel = void 0;
const TypeGraphQL = require("type-graphql");
var TransactionIsolationLevel;
(function (TransactionIsolationLevel) {
    TransactionIsolationLevel["ReadUncommitted"] = "ReadUncommitted";
    TransactionIsolationLevel["ReadCommitted"] = "ReadCommitted";
    TransactionIsolationLevel["RepeatableRead"] = "RepeatableRead";
    TransactionIsolationLevel["Serializable"] = "Serializable";
})(TransactionIsolationLevel || (exports.TransactionIsolationLevel = TransactionIsolationLevel = {}));
TypeGraphQL.registerEnumType(TransactionIsolationLevel, {
    name: "TransactionIsolationLevel",
    description: undefined,
});
//# sourceMappingURL=TransactionIsolationLevel.js.map