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
exports.SongCrudResolver = void 0;
const TypeGraphQL = require("type-graphql");
const AggregateSongArgs_1 = require("./args/AggregateSongArgs");
const CreateManySongArgs_1 = require("./args/CreateManySongArgs");
const CreateOneSongArgs_1 = require("./args/CreateOneSongArgs");
const DeleteManySongArgs_1 = require("./args/DeleteManySongArgs");
const DeleteOneSongArgs_1 = require("./args/DeleteOneSongArgs");
const FindFirstSongArgs_1 = require("./args/FindFirstSongArgs");
const FindFirstSongOrThrowArgs_1 = require("./args/FindFirstSongOrThrowArgs");
const FindManySongArgs_1 = require("./args/FindManySongArgs");
const FindUniqueSongArgs_1 = require("./args/FindUniqueSongArgs");
const FindUniqueSongOrThrowArgs_1 = require("./args/FindUniqueSongOrThrowArgs");
const GroupBySongArgs_1 = require("./args/GroupBySongArgs");
const UpdateManySongArgs_1 = require("./args/UpdateManySongArgs");
const UpdateOneSongArgs_1 = require("./args/UpdateOneSongArgs");
const UpsertOneSongArgs_1 = require("./args/UpsertOneSongArgs");
const helpers_1 = require("../../../helpers");
const Song_1 = require("../../../models/Song");
const AffectedRowsOutput_1 = require("../../outputs/AffectedRowsOutput");
const AggregateSong_1 = require("../../outputs/AggregateSong");
const SongGroupBy_1 = require("../../outputs/SongGroupBy");
let SongCrudResolver = exports.SongCrudResolver = class SongCrudResolver {
    async aggregateSong(ctx, info, args) {
        return (0, helpers_1.getPrismaFromContext)(ctx).song.aggregate({
            ...args,
            ...(0, helpers_1.transformInfoIntoPrismaArgs)(info),
        });
    }
    async createManySong(ctx, info, args) {
        const { _count } = (0, helpers_1.transformInfoIntoPrismaArgs)(info);
        return (0, helpers_1.getPrismaFromContext)(ctx).song.createMany({
            ...args,
            ...(_count && (0, helpers_1.transformCountFieldIntoSelectRelationsCount)(_count)),
        });
    }
    async createOneSong(ctx, info, args) {
        const { _count } = (0, helpers_1.transformInfoIntoPrismaArgs)(info);
        return (0, helpers_1.getPrismaFromContext)(ctx).song.create({
            ...args,
            ...(_count && (0, helpers_1.transformCountFieldIntoSelectRelationsCount)(_count)),
        });
    }
    async deleteManySong(ctx, info, args) {
        const { _count } = (0, helpers_1.transformInfoIntoPrismaArgs)(info);
        return (0, helpers_1.getPrismaFromContext)(ctx).song.deleteMany({
            ...args,
            ...(_count && (0, helpers_1.transformCountFieldIntoSelectRelationsCount)(_count)),
        });
    }
    async deleteOneSong(ctx, info, args) {
        const { _count } = (0, helpers_1.transformInfoIntoPrismaArgs)(info);
        return (0, helpers_1.getPrismaFromContext)(ctx).song.delete({
            ...args,
            ...(_count && (0, helpers_1.transformCountFieldIntoSelectRelationsCount)(_count)),
        });
    }
    async findFirstSong(ctx, info, args) {
        const { _count } = (0, helpers_1.transformInfoIntoPrismaArgs)(info);
        return (0, helpers_1.getPrismaFromContext)(ctx).song.findFirst({
            ...args,
            ...(_count && (0, helpers_1.transformCountFieldIntoSelectRelationsCount)(_count)),
        });
    }
    async findFirstSongOrThrow(ctx, info, args) {
        const { _count } = (0, helpers_1.transformInfoIntoPrismaArgs)(info);
        return (0, helpers_1.getPrismaFromContext)(ctx).song.findFirstOrThrow({
            ...args,
            ...(_count && (0, helpers_1.transformCountFieldIntoSelectRelationsCount)(_count)),
        });
    }
    async songs(ctx, info, args) {
        const { _count } = (0, helpers_1.transformInfoIntoPrismaArgs)(info);
        return (0, helpers_1.getPrismaFromContext)(ctx).song.findMany({
            ...args,
            ...(_count && (0, helpers_1.transformCountFieldIntoSelectRelationsCount)(_count)),
        });
    }
    async song(ctx, info, args) {
        const { _count } = (0, helpers_1.transformInfoIntoPrismaArgs)(info);
        return (0, helpers_1.getPrismaFromContext)(ctx).song.findUnique({
            ...args,
            ...(_count && (0, helpers_1.transformCountFieldIntoSelectRelationsCount)(_count)),
        });
    }
    async getSong(ctx, info, args) {
        const { _count } = (0, helpers_1.transformInfoIntoPrismaArgs)(info);
        return (0, helpers_1.getPrismaFromContext)(ctx).song.findUniqueOrThrow({
            ...args,
            ...(_count && (0, helpers_1.transformCountFieldIntoSelectRelationsCount)(_count)),
        });
    }
    async groupBySong(ctx, info, args) {
        const { _count, _avg, _sum, _min, _max } = (0, helpers_1.transformInfoIntoPrismaArgs)(info);
        return (0, helpers_1.getPrismaFromContext)(ctx).song.groupBy({
            ...args,
            ...Object.fromEntries(Object.entries({ _count, _avg, _sum, _min, _max }).filter(([_, v]) => v != null)),
        });
    }
    async updateManySong(ctx, info, args) {
        const { _count } = (0, helpers_1.transformInfoIntoPrismaArgs)(info);
        return (0, helpers_1.getPrismaFromContext)(ctx).song.updateMany({
            ...args,
            ...(_count && (0, helpers_1.transformCountFieldIntoSelectRelationsCount)(_count)),
        });
    }
    async updateOneSong(ctx, info, args) {
        const { _count } = (0, helpers_1.transformInfoIntoPrismaArgs)(info);
        return (0, helpers_1.getPrismaFromContext)(ctx).song.update({
            ...args,
            ...(_count && (0, helpers_1.transformCountFieldIntoSelectRelationsCount)(_count)),
        });
    }
    async upsertOneSong(ctx, info, args) {
        const { _count } = (0, helpers_1.transformInfoIntoPrismaArgs)(info);
        return (0, helpers_1.getPrismaFromContext)(ctx).song.upsert({
            ...args,
            ...(_count && (0, helpers_1.transformCountFieldIntoSelectRelationsCount)(_count)),
        });
    }
};
__decorate([
    TypeGraphQL.Query(_returns => AggregateSong_1.AggregateSong, {
        nullable: false
    }),
    __param(0, TypeGraphQL.Ctx()),
    __param(1, TypeGraphQL.Info()),
    __param(2, TypeGraphQL.Args()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, Object, AggregateSongArgs_1.AggregateSongArgs]),
    __metadata("design:returntype", Promise)
], SongCrudResolver.prototype, "aggregateSong", null);
__decorate([
    TypeGraphQL.Mutation(_returns => AffectedRowsOutput_1.AffectedRowsOutput, {
        nullable: false
    }),
    __param(0, TypeGraphQL.Ctx()),
    __param(1, TypeGraphQL.Info()),
    __param(2, TypeGraphQL.Args()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, Object, CreateManySongArgs_1.CreateManySongArgs]),
    __metadata("design:returntype", Promise)
], SongCrudResolver.prototype, "createManySong", null);
__decorate([
    TypeGraphQL.Mutation(_returns => Song_1.Song, {
        nullable: false
    }),
    __param(0, TypeGraphQL.Ctx()),
    __param(1, TypeGraphQL.Info()),
    __param(2, TypeGraphQL.Args()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, Object, CreateOneSongArgs_1.CreateOneSongArgs]),
    __metadata("design:returntype", Promise)
], SongCrudResolver.prototype, "createOneSong", null);
__decorate([
    TypeGraphQL.Mutation(_returns => AffectedRowsOutput_1.AffectedRowsOutput, {
        nullable: false
    }),
    __param(0, TypeGraphQL.Ctx()),
    __param(1, TypeGraphQL.Info()),
    __param(2, TypeGraphQL.Args()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, Object, DeleteManySongArgs_1.DeleteManySongArgs]),
    __metadata("design:returntype", Promise)
], SongCrudResolver.prototype, "deleteManySong", null);
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
], SongCrudResolver.prototype, "deleteOneSong", null);
__decorate([
    TypeGraphQL.Query(_returns => Song_1.Song, {
        nullable: true
    }),
    __param(0, TypeGraphQL.Ctx()),
    __param(1, TypeGraphQL.Info()),
    __param(2, TypeGraphQL.Args()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, Object, FindFirstSongArgs_1.FindFirstSongArgs]),
    __metadata("design:returntype", Promise)
], SongCrudResolver.prototype, "findFirstSong", null);
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
], SongCrudResolver.prototype, "findFirstSongOrThrow", null);
__decorate([
    TypeGraphQL.Query(_returns => [Song_1.Song], {
        nullable: false
    }),
    __param(0, TypeGraphQL.Ctx()),
    __param(1, TypeGraphQL.Info()),
    __param(2, TypeGraphQL.Args()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, Object, FindManySongArgs_1.FindManySongArgs]),
    __metadata("design:returntype", Promise)
], SongCrudResolver.prototype, "songs", null);
__decorate([
    TypeGraphQL.Query(_returns => Song_1.Song, {
        nullable: true
    }),
    __param(0, TypeGraphQL.Ctx()),
    __param(1, TypeGraphQL.Info()),
    __param(2, TypeGraphQL.Args()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, Object, FindUniqueSongArgs_1.FindUniqueSongArgs]),
    __metadata("design:returntype", Promise)
], SongCrudResolver.prototype, "song", null);
__decorate([
    TypeGraphQL.Query(_returns => Song_1.Song, {
        nullable: true
    }),
    __param(0, TypeGraphQL.Ctx()),
    __param(1, TypeGraphQL.Info()),
    __param(2, TypeGraphQL.Args()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, Object, FindUniqueSongOrThrowArgs_1.FindUniqueSongOrThrowArgs]),
    __metadata("design:returntype", Promise)
], SongCrudResolver.prototype, "getSong", null);
__decorate([
    TypeGraphQL.Query(_returns => [SongGroupBy_1.SongGroupBy], {
        nullable: false
    }),
    __param(0, TypeGraphQL.Ctx()),
    __param(1, TypeGraphQL.Info()),
    __param(2, TypeGraphQL.Args()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, Object, GroupBySongArgs_1.GroupBySongArgs]),
    __metadata("design:returntype", Promise)
], SongCrudResolver.prototype, "groupBySong", null);
__decorate([
    TypeGraphQL.Mutation(_returns => AffectedRowsOutput_1.AffectedRowsOutput, {
        nullable: false
    }),
    __param(0, TypeGraphQL.Ctx()),
    __param(1, TypeGraphQL.Info()),
    __param(2, TypeGraphQL.Args()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, Object, UpdateManySongArgs_1.UpdateManySongArgs]),
    __metadata("design:returntype", Promise)
], SongCrudResolver.prototype, "updateManySong", null);
__decorate([
    TypeGraphQL.Mutation(_returns => Song_1.Song, {
        nullable: true
    }),
    __param(0, TypeGraphQL.Ctx()),
    __param(1, TypeGraphQL.Info()),
    __param(2, TypeGraphQL.Args()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, Object, UpdateOneSongArgs_1.UpdateOneSongArgs]),
    __metadata("design:returntype", Promise)
], SongCrudResolver.prototype, "updateOneSong", null);
__decorate([
    TypeGraphQL.Mutation(_returns => Song_1.Song, {
        nullable: false
    }),
    __param(0, TypeGraphQL.Ctx()),
    __param(1, TypeGraphQL.Info()),
    __param(2, TypeGraphQL.Args()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, Object, UpsertOneSongArgs_1.UpsertOneSongArgs]),
    __metadata("design:returntype", Promise)
], SongCrudResolver.prototype, "upsertOneSong", null);
exports.SongCrudResolver = SongCrudResolver = __decorate([
    TypeGraphQL.Resolver(_of => Song_1.Song)
], SongCrudResolver);
//# sourceMappingURL=SongCrudResolver.js.map