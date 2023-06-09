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
exports.SongAuthorRelationsResolver = void 0;
const TypeGraphQL = require("type-graphql");
const Author_1 = require("../../../models/Author");
const Song_1 = require("../../../models/Song");
const SongAuthor_1 = require("../../../models/SongAuthor");
const helpers_1 = require("../../../helpers");
let SongAuthorRelationsResolver = exports.SongAuthorRelationsResolver = class SongAuthorRelationsResolver {
    async author(songAuthor, ctx, info) {
        const { _count } = (0, helpers_1.transformInfoIntoPrismaArgs)(info);
        return (0, helpers_1.getPrismaFromContext)(ctx).songAuthor.findUniqueOrThrow({
            where: {
                songId_authorId: {
                    songId: songAuthor.songId,
                    authorId: songAuthor.authorId,
                },
            },
        }).author({
            ...(_count && (0, helpers_1.transformCountFieldIntoSelectRelationsCount)(_count)),
        });
    }
    async song(songAuthor, ctx, info) {
        const { _count } = (0, helpers_1.transformInfoIntoPrismaArgs)(info);
        return (0, helpers_1.getPrismaFromContext)(ctx).songAuthor.findUniqueOrThrow({
            where: {
                songId_authorId: {
                    songId: songAuthor.songId,
                    authorId: songAuthor.authorId,
                },
            },
        }).song({
            ...(_count && (0, helpers_1.transformCountFieldIntoSelectRelationsCount)(_count)),
        });
    }
};
__decorate([
    TypeGraphQL.FieldResolver(_type => Author_1.Author, {
        nullable: false
    }),
    __param(0, TypeGraphQL.Root()),
    __param(1, TypeGraphQL.Ctx()),
    __param(2, TypeGraphQL.Info()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [SongAuthor_1.SongAuthor, Object, Object]),
    __metadata("design:returntype", Promise)
], SongAuthorRelationsResolver.prototype, "author", null);
__decorate([
    TypeGraphQL.FieldResolver(_type => Song_1.Song, {
        nullable: false
    }),
    __param(0, TypeGraphQL.Root()),
    __param(1, TypeGraphQL.Ctx()),
    __param(2, TypeGraphQL.Info()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [SongAuthor_1.SongAuthor, Object, Object]),
    __metadata("design:returntype", Promise)
], SongAuthorRelationsResolver.prototype, "song", null);
exports.SongAuthorRelationsResolver = SongAuthorRelationsResolver = __decorate([
    TypeGraphQL.Resolver(_of => SongAuthor_1.SongAuthor)
], SongAuthorRelationsResolver);
//# sourceMappingURL=SongAuthorRelationsResolver.js.map