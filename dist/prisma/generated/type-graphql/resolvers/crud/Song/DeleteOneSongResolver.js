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
exports.DeleteOneSongResolver = void 0;
const TypeGraphQL = require("type-graphql");
const DeleteOneSongArgs_1 = require("./args/DeleteOneSongArgs");
const Song_1 = require("../../../models/Song");
const helpers_1 = require("../../../helpers");
let DeleteOneSongResolver = exports.DeleteOneSongResolver = class DeleteOneSongResolver {
    async deleteOneSong(ctx, info, args) {
        const { _count } = (0, helpers_1.transformInfoIntoPrismaArgs)(info);
        return (0, helpers_1.getPrismaFromContext)(ctx).song.delete({
            ...args,
            ...(_count && (0, helpers_1.transformCountFieldIntoSelectRelationsCount)(_count)),
        });
    }
};
__decorate([
    TypeGraphQL.Mutation(_returns => Song_1.Song, {
        nullable: true
    }),
    __param(0, TypeGraphQL.Ctx()),
    __param(1, TypeGraphQL.Info()),
    __param(2, TypeGraphQL.Args()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, Object, DeleteOneSongArgs_1.DeleteOneSongArgs]),
    __metadata("design:returntype", Promise)
], DeleteOneSongResolver.prototype, "deleteOneSong", null);
exports.DeleteOneSongResolver = DeleteOneSongResolver = __decorate([
    TypeGraphQL.Resolver(_of => Song_1.Song)
], DeleteOneSongResolver);
//# sourceMappingURL=DeleteOneSongResolver.js.map