"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.SongScalarFieldEnum = void 0;
const TypeGraphQL = require("type-graphql");
var SongScalarFieldEnum;
(function (SongScalarFieldEnum) {
    SongScalarFieldEnum["id"] = "id";
    SongScalarFieldEnum["title"] = "title";
    SongScalarFieldEnum["slug"] = "slug";
    SongScalarFieldEnum["url"] = "url";
    SongScalarFieldEnum["lyric"] = "lyric";
    SongScalarFieldEnum["createdAt"] = "createdAt";
})(SongScalarFieldEnum || (exports.SongScalarFieldEnum = SongScalarFieldEnum = {}));
TypeGraphQL.registerEnumType(SongScalarFieldEnum, {
    name: "SongScalarFieldEnum",
    description: undefined,
});
//# sourceMappingURL=SongScalarFieldEnum.js.map