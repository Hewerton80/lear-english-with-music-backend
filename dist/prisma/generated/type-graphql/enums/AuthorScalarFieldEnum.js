"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AuthorScalarFieldEnum = void 0;
const TypeGraphQL = require("type-graphql");
var AuthorScalarFieldEnum;
(function (AuthorScalarFieldEnum) {
    AuthorScalarFieldEnum["id"] = "id";
    AuthorScalarFieldEnum["name"] = "name";
    AuthorScalarFieldEnum["slug"] = "slug";
    AuthorScalarFieldEnum["createdAt"] = "createdAt";
})(AuthorScalarFieldEnum || (exports.AuthorScalarFieldEnum = AuthorScalarFieldEnum = {}));
TypeGraphQL.registerEnumType(AuthorScalarFieldEnum, {
    name: "AuthorScalarFieldEnum",
    description: undefined,
});
//# sourceMappingURL=AuthorScalarFieldEnum.js.map