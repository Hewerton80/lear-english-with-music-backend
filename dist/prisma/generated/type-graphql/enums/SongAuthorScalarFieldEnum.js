"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.SongAuthorScalarFieldEnum = void 0;
const TypeGraphQL = require("type-graphql");
var SongAuthorScalarFieldEnum;
(function (SongAuthorScalarFieldEnum) {
    SongAuthorScalarFieldEnum["authorId"] = "authorId";
    SongAuthorScalarFieldEnum["songId"] = "songId";
    SongAuthorScalarFieldEnum["createdAt"] = "createdAt";
})(SongAuthorScalarFieldEnum || (exports.SongAuthorScalarFieldEnum = SongAuthorScalarFieldEnum = {}));
TypeGraphQL.registerEnumType(SongAuthorScalarFieldEnum, {
    name: "SongAuthorScalarFieldEnum",
    description: undefined,
});
//# sourceMappingURL=SongAuthorScalarFieldEnum.js.map