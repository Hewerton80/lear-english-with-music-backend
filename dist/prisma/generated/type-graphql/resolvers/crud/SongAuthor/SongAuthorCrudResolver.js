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
exports.SongAuthorCrudResolver = void 0;
const TypeGraphQL = require("type-graphql");
const AggregateSongAuthorArgs_1 = require("./args/AggregateSongAuthorArgs");
const CreateManySongAuthorArgs_1 = require("./args/CreateManySongAuthorArgs");
const CreateOneSongAuthorArgs_1 = require("./args/CreateOneSongAuthorArgs");
const DeleteManySongAuthorArgs_1 = require("./args/DeleteManySongAuthorArgs");
const DeleteOneSongAuthorArgs_1 = require("./args/DeleteOneSongAuthorArgs");
const FindFirstSongAuthorArgs_1 = require("./args/FindFirstSongAuthorArgs");
const FindFirstSongAuthorOrThrowArgs_1 = require("./args/FindFirstSongAuthorOrThrowArgs");
const FindManySongAuthorArgs_1 = require("./args/FindManySongAuthorArgs");
const FindUniqueSongAuthorArgs_1 = require("./args/FindUniqueSongAuthorArgs");
const FindUniqueSongAuthorOrThrowArgs_1 = require("./args/FindUniqueSongAuthorOrThrowArgs");
const GroupBySongAuthorArgs_1 = require("./args/GroupBySongAuthorArgs");
const UpdateManySongAuthorArgs_1 = require("./args/UpdateManySongAuthorArgs");
const UpdateOneSongAuthorArgs_1 = require("./args/UpdateOneSongAuthorArgs");
const UpsertOneSongAuthorArgs_1 = require("./args/UpsertOneSongAuthorArgs");
const helpers_1 = require("../../../helpers");
const SongAuthor_1 = require("../../../models/SongAuthor");
const AffectedRowsOutput_1 = require("../../outputs/AffectedRowsOutput");
const AggregateSongAuthor_1 = require("../../outputs/AggregateSongAuthor");
const SongAuthorGroupBy_1 = require("../../outputs/SongAuthorGroupBy");
let SongAuthorCrudResolver = exports.SongAuthorCrudResolver = class SongAuthorCrudResolver {
    async aggregateSongAuthor(ctx, info, args) {
        return (0, helpers_1.getPrismaFromContext)(ctx).songAuthor.aggregate({
            ...args,
            ...(0, helpers_1.transformInfoIntoPrismaArgs)(info),
        });
    }
    async createManySongAuthor(ctx, info, args) {
        const { _count } = (0, helpers_1.transformInfoIntoPrismaArgs)(info);
        return (0, helpers_1.getPrismaFromContext)(ctx).songAuthor.createMany({
            ...args,
            ...(_count && (0, helpers_1.transformCountFieldIntoSelectRelationsCount)(_count)),
        });
    }
    async createOneSongAuthor(ctx, info, args) {
        const { _count } = (0, helpers_1.transformInfoIntoPrismaArgs)(info);
        return (0, helpers_1.getPrismaFromContext)(ctx).songAuthor.create({
            ...args,
            ...(_count && (0, helpers_1.transformCountFieldIntoSelectRelationsCount)(_count)),
        });
    }
    async deleteManySongAuthor(ctx, info, args) {
        const { _count } = (0, helpers_1.transformInfoIntoPrismaArgs)(info);
        return (0, helpers_1.getPrismaFromContext)(ctx).songAuthor.deleteMany({
            ...args,
            ...(_count && (0, helpers_1.transformCountFieldIntoSelectRelationsCount)(_count)),
        });
    }
    async deleteOneSongAuthor(ctx, info, args) {
        const { _count } = (0, helpers_1.transformInfoIntoPrismaArgs)(info);
        return (0, helpers_1.getPrismaFromContext)(ctx).songAuthor.delete({
            ...args,
            ...(_count && (0, helpers_1.transformCountFieldIntoSelectRelationsCount)(_count)),
        });
    }
    async findFirstSongAuthor(ctx, info, args) {
        const { _count } = (0, helpers_1.transformInfoIntoPrismaArgs)(info);
        return (0, helpers_1.getPrismaFromContext)(ctx).songAuthor.findFirst({
            ...args,
            ...(_count && (0, helpers_1.transformCountFieldIntoSelectRelationsCount)(_count)),
        });
    }
    async findFirstSongAuthorOrThrow(ctx, info, args) {
        const { _count } = (0, helpers_1.transformInfoIntoPrismaArgs)(info);
        return (0, helpers_1.getPrismaFromContext)(ctx).songAuthor.findFirstOrThrow({
            ...args,
            ...(_count && (0, helpers_1.transformCountFieldIntoSelectRelationsCount)(_count)),
        });
    }
    async songAuthors(ctx, info, args) {
        const { _count } = (0, helpers_1.transformInfoIntoPrismaArgs)(info);
        return (0, helpers_1.getPrismaFromContext)(ctx).songAuthor.findMany({
            ...args,
            ...(_count && (0, helpers_1.transformCountFieldIntoSelectRelationsCount)(_count)),
        });
    }
    async songAuthor(ctx, info, args) {
        const { _count } = (0, helpers_1.transformInfoIntoPrismaArgs)(info);
        return (0, helpers_1.getPrismaFromContext)(ctx).songAuthor.findUnique({
            ...args,
            ...(_count && (0, helpers_1.transformCountFieldIntoSelectRelationsCount)(_count)),
        });
    }
    async getSongAuthor(ctx, info, args) {
        const { _count } = (0, helpers_1.transformInfoIntoPrismaArgs)(info);
        return (0, helpers_1.getPrismaFromContext)(ctx).songAuthor.findUniqueOrThrow({
            ...args,
            ...(_count && (0, helpers_1.transformCountFieldIntoSelectRelationsCount)(_count)),
        });
    }
    async groupBySongAuthor(ctx, info, args) {
        const { _count, _avg, _sum, _min, _max } = (0, helpers_1.transformInfoIntoPrismaArgs)(info);
        return (0, helpers_1.getPrismaFromContext)(ctx).songAuthor.groupBy({
            ...args,
            ...Object.fromEntries(Object.entries({ _count, _avg, _sum, _min, _max }).filter(([_, v]) => v != null)),
        });
    }
    async updateManySongAuthor(ctx, info, args) {
        const { _count } = (0, helpers_1.transformInfoIntoPrismaArgs)(info);
        return (0, helpers_1.getPrismaFromContext)(ctx).songAuthor.updateMany({
            ...args,
            ...(_count && (0, helpers_1.transformCountFieldIntoSelectRelationsCount)(_count)),
        });
    }
    async updateOneSongAuthor(ctx, info, args) {
        const { _count } = (0, helpers_1.transformInfoIntoPrismaArgs)(info);
        return (0, helpers_1.getPrismaFromContext)(ctx).songAuthor.update({
            ...args,
            ...(_count && (0, helpers_1.transformCountFieldIntoSelectRelationsCount)(_count)),
        });
    }
    async upsertOneSongAuthor(ctx, info, args) {
        const { _count } = (0, helpers_1.transformInfoIntoPrismaArgs)(info);
        return (0, helpers_1.getPrismaFromContext)(ctx).songAuthor.upsert({
            ...args,
            ...(_count && (0, helpers_1.transformCountFieldIntoSelectRelationsCount)(_count)),
        });
    }
};
__decorate([
    TypeGraphQL.Query(_returns => AggregateSongAuthor_1.AggregateSongAuthor, {
        nullable: false
    }),
    __param(0, TypeGraphQL.Ctx()),
    __param(1, TypeGraphQL.Info()),
    __param(2, TypeGraphQL.Args()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, Object, AggregateSongAuthorArgs_1.AggregateSongAuthorArgs]),
    __metadata("design:returntype", Promise)
], SongAuthorCrudResolver.prototype, "aggregateSongAuthor", null);
__decorate([
    TypeGraphQL.Mutation(_returns => AffectedRowsOutput_1.AffectedRowsOutput, {
        nullable: false
    }),
    __param(0, TypeGraphQL.Ctx()),
    __param(1, TypeGraphQL.Info()),
    __param(2, TypeGraphQL.Args()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, Object, CreateManySongAuthorArgs_1.CreateManySongAuthorArgs]),
    __metadata("design:returntype", Promise)
], SongAuthorCrudResolver.prototype, "createManySongAuthor", null);
__decorate([
    TypeGraphQL.Mutation(_returns => SongAuthor_1.SongAuthor, {
        nullable: false
    }),
    __param(0, TypeGraphQL.Ctx()),
    __param(1, TypeGraphQL.Info()),
    __param(2, TypeGraphQL.Args()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, Object, CreateOneSongAuthorArgs_1.CreateOneSongAuthorArgs]),
    __metadata("design:returntype", Promise)
], SongAuthorCrudResolver.prototype, "createOneSongAuthor", null);
__decorate([
    TypeGraphQL.Mutation(_returns => AffectedRowsOutput_1.AffectedRowsOutput, {
        nullable: false
    }),
    __param(0, TypeGraphQL.Ctx()),
    __param(1, TypeGraphQL.Info()),
    __param(2, TypeGraphQL.Args()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, Object, DeleteManySongAuthorArgs_1.DeleteManySongAuthorArgs]),
    __metadata("design:returntype", Promise)
], SongAuthorCrudResolver.prototype, "deleteManySongAuthor", null);
__decorate([
    TypeGraphQL.Mutation(_returns => SongAuthor_1.SongAuthor, {
        nullable: true
    }),
    __param(0, TypeGraphQL.Ctx()),
    __param(1, TypeGraphQL.Info()),
    __param(2, TypeGraphQL.Args()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, Object, DeleteOneSongAuthorArgs_1.DeleteOneSongAuthorArgs]),
    __metadata("design:returntype", Promise)
], SongAuthorCrudResolver.prototype, "deleteOneSongAuthor", null);
__decorate([
    TypeGraphQL.Query(_returns => SongAuthor_1.SongAuthor, {
        nullable: true
    }),
    __param(0, TypeGraphQL.Ctx()),
    __param(1, TypeGraphQL.Info()),
    __param(2, TypeGraphQL.Args()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, Object, FindFirstSongAuthorArgs_1.FindFirstSongAuthorArgs]),
    __metadata("design:returntype", Promise)
], SongAuthorCrudResolver.prototype, "findFirstSongAuthor", null);
__decorate([
    TypeGraphQL.Query(_returns => SongAuthor_1.SongAuthor, {
        nullable: true
    }),
    __param(0, TypeGraphQL.Ctx()),
    __param(1, TypeGraphQL.Info()),
    __param(2, TypeGraphQL.Args()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, Object, FindFirstSongAuthorOrThrowArgs_1.FindFirstSongAuthorOrThrowArgs]),
    __metadata("design:returntype", Promise)
], SongAuthorCrudResolver.prototype, "findFirstSongAuthorOrThrow", null);
__decorate([
    TypeGraphQL.Query(_returns => [SongAuthor_1.SongAuthor], {
        nullable: false
    }),
    __param(0, TypeGraphQL.Ctx()),
    __param(1, TypeGraphQL.Info()),
    __param(2, TypeGraphQL.Args()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, Object, FindManySongAuthorArgs_1.FindManySongAuthorArgs]),
    __metadata("design:returntype", Promise)
], SongAuthorCrudResolver.prototype, "songAuthors", null);
__decorate([
    TypeGraphQL.Query(_returns => SongAuthor_1.SongAuthor, {
        nullable: true
    }),
    __param(0, TypeGraphQL.Ctx()),
    __param(1, TypeGraphQL.Info()),
    __param(2, TypeGraphQL.Args()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, Object, FindUniqueSongAuthorArgs_1.FindUniqueSongAuthorArgs]),
    __metadata("design:returntype", Promise)
], SongAuthorCrudResolver.prototype, "songAuthor", null);
__decorate([
    TypeGraphQL.Query(_returns => SongAuthor_1.SongAuthor, {
        nullable: true
    }),
    __param(0, TypeGraphQL.Ctx()),
    __param(1, TypeGraphQL.Info()),
    __param(2, TypeGraphQL.Args()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, Object, FindUniqueSongAuthorOrThrowArgs_1.FindUniqueSongAuthorOrThrowArgs]),
    __metadata("design:returntype", Promise)
], SongAuthorCrudResolver.prototype, "getSongAuthor", null);
__decorate([
    TypeGraphQL.Query(_returns => [SongAuthorGroupBy_1.SongAuthorGroupBy], {
        nullable: false
    }),
    __param(0, TypeGraphQL.Ctx()),
    __param(1, TypeGraphQL.Info()),
    __param(2, TypeGraphQL.Args()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, Object, GroupBySongAuthorArgs_1.GroupBySongAuthorArgs]),
    __metadata("design:returntype", Promise)
], SongAuthorCrudResolver.prototype, "groupBySongAuthor", null);
__decorate([
    TypeGraphQL.Mutation(_returns => AffectedRowsOutput_1.AffectedRowsOutput, {
        nullable: false
    }),
    __param(0, TypeGraphQL.Ctx()),
    __param(1, TypeGraphQL.Info()),
    __param(2, TypeGraphQL.Args()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, Object, UpdateManySongAuthorArgs_1.UpdateManySongAuthorArgs]),
    __metadata("design:returntype", Promise)
], SongAuthorCrudResolver.prototype, "updateManySongAuthor", null);
__decorate([
    TypeGraphQL.Mutation(_returns => SongAuthor_1.SongAuthor, {
        nullable: true
    }),
    __param(0, TypeGraphQL.Ctx()),
    __param(1, TypeGraphQL.Info()),
    __param(2, TypeGraphQL.Args()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, Object, UpdateOneSongAuthorArgs_1.UpdateOneSongAuthorArgs]),
    __metadata("design:returntype", Promise)
], SongAuthorCrudResolver.prototype, "updateOneSongAuthor", null);
__decorate([
    TypeGraphQL.Mutation(_returns => SongAuthor_1.SongAuthor, {
        nullable: false
    }),
    __param(0, TypeGraphQL.Ctx()),
    __param(1, TypeGraphQL.Info()),
    __param(2, TypeGraphQL.Args()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, Object, UpsertOneSongAuthorArgs_1.UpsertOneSongAuthorArgs]),
    __metadata("design:returntype", Promise)
], SongAuthorCrudResolver.prototype, "upsertOneSongAuthor", null);
exports.SongAuthorCrudResolver = SongAuthorCrudResolver = __decorate([
    TypeGraphQL.Resolver(_of => SongAuthor_1.SongAuthor)
], SongAuthorCrudResolver);
//# sourceMappingURL=SongAuthorCrudResolver.js.map