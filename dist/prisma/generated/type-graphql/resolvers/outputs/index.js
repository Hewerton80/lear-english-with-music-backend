"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __exportStar = (this && this.__exportStar) || function(m, exports) {
    for (var p in m) if (p !== "default" && !Object.prototype.hasOwnProperty.call(exports, p)) __createBinding(exports, m, p);
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.SongMinAggregate = exports.SongMaxAggregate = exports.SongGroupBy = exports.SongCountAggregate = exports.SongCount = exports.SongAuthorMinAggregate = exports.SongAuthorMaxAggregate = exports.SongAuthorGroupBy = exports.SongAuthorCountAggregate = exports.AuthorMinAggregate = exports.AuthorMaxAggregate = exports.AuthorGroupBy = exports.AuthorCountAggregate = exports.AuthorCount = exports.AggregateSongAuthor = exports.AggregateSong = exports.AggregateAuthor = exports.AffectedRowsOutput = void 0;
var AffectedRowsOutput_1 = require("./AffectedRowsOutput");
Object.defineProperty(exports, "AffectedRowsOutput", { enumerable: true, get: function () { return AffectedRowsOutput_1.AffectedRowsOutput; } });
var AggregateAuthor_1 = require("./AggregateAuthor");
Object.defineProperty(exports, "AggregateAuthor", { enumerable: true, get: function () { return AggregateAuthor_1.AggregateAuthor; } });
var AggregateSong_1 = require("./AggregateSong");
Object.defineProperty(exports, "AggregateSong", { enumerable: true, get: function () { return AggregateSong_1.AggregateSong; } });
var AggregateSongAuthor_1 = require("./AggregateSongAuthor");
Object.defineProperty(exports, "AggregateSongAuthor", { enumerable: true, get: function () { return AggregateSongAuthor_1.AggregateSongAuthor; } });
var AuthorCount_1 = require("./AuthorCount");
Object.defineProperty(exports, "AuthorCount", { enumerable: true, get: function () { return AuthorCount_1.AuthorCount; } });
var AuthorCountAggregate_1 = require("./AuthorCountAggregate");
Object.defineProperty(exports, "AuthorCountAggregate", { enumerable: true, get: function () { return AuthorCountAggregate_1.AuthorCountAggregate; } });
var AuthorGroupBy_1 = require("./AuthorGroupBy");
Object.defineProperty(exports, "AuthorGroupBy", { enumerable: true, get: function () { return AuthorGroupBy_1.AuthorGroupBy; } });
var AuthorMaxAggregate_1 = require("./AuthorMaxAggregate");
Object.defineProperty(exports, "AuthorMaxAggregate", { enumerable: true, get: function () { return AuthorMaxAggregate_1.AuthorMaxAggregate; } });
var AuthorMinAggregate_1 = require("./AuthorMinAggregate");
Object.defineProperty(exports, "AuthorMinAggregate", { enumerable: true, get: function () { return AuthorMinAggregate_1.AuthorMinAggregate; } });
var SongAuthorCountAggregate_1 = require("./SongAuthorCountAggregate");
Object.defineProperty(exports, "SongAuthorCountAggregate", { enumerable: true, get: function () { return SongAuthorCountAggregate_1.SongAuthorCountAggregate; } });
var SongAuthorGroupBy_1 = require("./SongAuthorGroupBy");
Object.defineProperty(exports, "SongAuthorGroupBy", { enumerable: true, get: function () { return SongAuthorGroupBy_1.SongAuthorGroupBy; } });
var SongAuthorMaxAggregate_1 = require("./SongAuthorMaxAggregate");
Object.defineProperty(exports, "SongAuthorMaxAggregate", { enumerable: true, get: function () { return SongAuthorMaxAggregate_1.SongAuthorMaxAggregate; } });
var SongAuthorMinAggregate_1 = require("./SongAuthorMinAggregate");
Object.defineProperty(exports, "SongAuthorMinAggregate", { enumerable: true, get: function () { return SongAuthorMinAggregate_1.SongAuthorMinAggregate; } });
var SongCount_1 = require("./SongCount");
Object.defineProperty(exports, "SongCount", { enumerable: true, get: function () { return SongCount_1.SongCount; } });
var SongCountAggregate_1 = require("./SongCountAggregate");
Object.defineProperty(exports, "SongCountAggregate", { enumerable: true, get: function () { return SongCountAggregate_1.SongCountAggregate; } });
var SongGroupBy_1 = require("./SongGroupBy");
Object.defineProperty(exports, "SongGroupBy", { enumerable: true, get: function () { return SongGroupBy_1.SongGroupBy; } });
var SongMaxAggregate_1 = require("./SongMaxAggregate");
Object.defineProperty(exports, "SongMaxAggregate", { enumerable: true, get: function () { return SongMaxAggregate_1.SongMaxAggregate; } });
var SongMinAggregate_1 = require("./SongMinAggregate");
Object.defineProperty(exports, "SongMinAggregate", { enumerable: true, get: function () { return SongMinAggregate_1.SongMinAggregate; } });
__exportStar(require("./args"), exports);
//# sourceMappingURL=index.js.map