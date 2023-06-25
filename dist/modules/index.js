"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.resolvers = void 0;
const author_resolver_1 = require("./author/author.resolver");
const song_resolver_1 = require("./song/song.resolver");
exports.resolvers = [
    song_resolver_1.SongResolver,
    author_resolver_1.AuthorResolver,
];
//# sourceMappingURL=index.js.map