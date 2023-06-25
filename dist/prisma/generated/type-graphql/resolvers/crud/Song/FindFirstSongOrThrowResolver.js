"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.FindFirstSongOrThrowResolver = void 0;
const TypeGraphQL = require("type-graphql");
const FindFirstSongOrThrowArgs_1 = require("./args/FindFirstSongOrThrowArgs");
const Song_1 = require("../../../models/Song");
const helpers_1 = require("../../../helpers");
let FindFirstSongOrThrowResolver = exports.FindFirstSongOrThrowResolver = class FindFirstSongOrThrowResolver {
    async findFirstSongOrThrow(ctx, info, args) {
        const { _count } = (0, helpers_1.transformInfoIntoPrismaArgs)(info);
        return (0, helpers_1.getPrismaFromContext)(ctx).song.findFirstOrThrow({
            ...args,
            ...(_count && (0, helpers_1.transformCountFieldIntoSelectRelationsCount)(_count)),
        });
    }
};
__decorate([
    TypeGraphQL.Query(_returns => Song_1.Song, {
        nullable: true
    }),
    __param(0, TypeGraphQL.Ctx()),
    __param(1, TypeGraphQL.Info()),
    __param(2, TypeGraphQL.Args()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, Object, FindFirstSongOrThrowArgs_1.FindFirstSongOrThrowArgs]),
    __metadata("design:returntype", Promise)
], FindFirstSongOrThrowResolver.prototype, "findFirstSongOrThrow", null);
exports.FindFirstSongOrThrowResolver = FindFirstSongOrThrowResolver = __decorate([
    TypeGraphQL.Resolver(_of => Song_1.Song)
], FindFirstSongOrThrowResolver);
//# sourceMappingURL=FindFirstSongOrThrowResolver.js.map