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
exports.AuthorCrudResolver = void 0;
const TypeGraphQL = require("type-graphql");
const AggregateAuthorArgs_1 = require("./args/AggregateAuthorArgs");
const CreateManyAuthorArgs_1 = require("./args/CreateManyAuthorArgs");
const CreateOneAuthorArgs_1 = require("./args/CreateOneAuthorArgs");
const DeleteManyAuthorArgs_1 = require("./args/DeleteManyAuthorArgs");
const DeleteOneAuthorArgs_1 = require("./args/DeleteOneAuthorArgs");
const FindFirstAuthorArgs_1 = require("./args/FindFirstAuthorArgs");
const FindFirstAuthorOrThrowArgs_1 = require("./args/FindFirstAuthorOrThrowArgs");
const FindManyAuthorArgs_1 = require("./args/FindManyAuthorArgs");
const FindUniqueAuthorArgs_1 = require("./args/FindUniqueAuthorArgs");
const FindUniqueAuthorOrThrowArgs_1 = require("./args/FindUniqueAuthorOrThrowArgs");
const GroupByAuthorArgs_1 = require("./args/GroupByAuthorArgs");
const UpdateManyAuthorArgs_1 = require("./args/UpdateManyAuthorArgs");
const UpdateOneAuthorArgs_1 = require("./args/UpdateOneAuthorArgs");
const UpsertOneAuthorArgs_1 = require("./args/UpsertOneAuthorArgs");
const helpers_1 = require("../../../helpers");
const Author_1 = require("../../../models/Author");
const AffectedRowsOutput_1 = require("../../outputs/AffectedRowsOutput");
const AggregateAuthor_1 = require("../../outputs/AggregateAuthor");
const AuthorGroupBy_1 = require("../../outputs/AuthorGroupBy");
let AuthorCrudResolver = exports.AuthorCrudResolver = class AuthorCrudResolver {
    async aggregateAuthor(ctx, info, args) {
        return (0, helpers_1.getPrismaFromContext)(ctx).author.aggregate({
            ...args,
            ...(0, helpers_1.transformInfoIntoPrismaArgs)(info),
        });
    }
    async createManyAuthor(ctx, info, args) {
        const { _count } = (0, helpers_1.transformInfoIntoPrismaArgs)(info);
        return (0, helpers_1.getPrismaFromContext)(ctx).author.createMany({
            ...args,
            ...(_count && (0, helpers_1.transformCountFieldIntoSelectRelationsCount)(_count)),
        });
    }
    async createOneAuthor(ctx, info, args) {
        const { _count } = (0, helpers_1.transformInfoIntoPrismaArgs)(info);
        return (0, helpers_1.getPrismaFromContext)(ctx).author.create({
            ...args,
            ...(_count && (0, helpers_1.transformCountFieldIntoSelectRelationsCount)(_count)),
        });
    }
    async deleteManyAuthor(ctx, info, args) {
        const { _count } = (0, helpers_1.transformInfoIntoPrismaArgs)(info);
        return (0, helpers_1.getPrismaFromContext)(ctx).author.deleteMany({
            ...args,
            ...(_count && (0, helpers_1.transformCountFieldIntoSelectRelationsCount)(_count)),
        });
    }
    async deleteOneAuthor(ctx, info, args) {
        const { _count } = (0, helpers_1.transformInfoIntoPrismaArgs)(info);
        return (0, helpers_1.getPrismaFromContext)(ctx).author.delete({
            ...args,
            ...(_count && (0, helpers_1.transformCountFieldIntoSelectRelationsCount)(_count)),
        });
    }
    async findFirstAuthor(ctx, info, args) {
        const { _count } = (0, helpers_1.transformInfoIntoPrismaArgs)(info);
        return (0, helpers_1.getPrismaFromContext)(ctx).author.findFirst({
            ...args,
            ...(_count && (0, helpers_1.transformCountFieldIntoSelectRelationsCount)(_count)),
        });
    }
    async findFirstAuthorOrThrow(ctx, info, args) {
        const { _count } = (0, helpers_1.transformInfoIntoPrismaArgs)(info);
        return (0, helpers_1.getPrismaFromContext)(ctx).author.findFirstOrThrow({
            ...args,
            ...(_count && (0, helpers_1.transformCountFieldIntoSelectRelationsCount)(_count)),
        });
    }
    async authors(ctx, info, args) {
        const { _count } = (0, helpers_1.transformInfoIntoPrismaArgs)(info);
        return (0, helpers_1.getPrismaFromContext)(ctx).author.findMany({
            ...args,
            ...(_count && (0, helpers_1.transformCountFieldIntoSelectRelationsCount)(_count)),
        });
    }
    async author(ctx, info, args) {
        const { _count } = (0, helpers_1.transformInfoIntoPrismaArgs)(info);
        return (0, helpers_1.getPrismaFromContext)(ctx).author.findUnique({
            ...args,
            ...(_count && (0, helpers_1.transformCountFieldIntoSelectRelationsCount)(_count)),
        });
    }
    async getAuthor(ctx, info, args) {
        const { _count } = (0, helpers_1.transformInfoIntoPrismaArgs)(info);
        return (0, helpers_1.getPrismaFromContext)(ctx).author.findUniqueOrThrow({
            ...args,
            ...(_count && (0, helpers_1.transformCountFieldIntoSelectRelationsCount)(_count)),
        });
    }
    async groupByAuthor(ctx, info, args) {
        const { _count, _avg, _sum, _min, _max } = (0, helpers_1.transformInfoIntoPrismaArgs)(info);
        return (0, helpers_1.getPrismaFromContext)(ctx).author.groupBy({
            ...args,
            ...Object.fromEntries(Object.entries({ _count, _avg, _sum, _min, _max }).filter(([_, v]) => v != null)),
        });
    }
    async updateManyAuthor(ctx, info, args) {
        const { _count } = (0, helpers_1.transformInfoIntoPrismaArgs)(info);
        return (0, helpers_1.getPrismaFromContext)(ctx).author.updateMany({
            ...args,
            ...(_count && (0, helpers_1.transformCountFieldIntoSelectRelationsCount)(_count)),
        });
    }
    async updateOneAuthor(ctx, info, args) {
        const { _count } = (0, helpers_1.transformInfoIntoPrismaArgs)(info);
        return (0, helpers_1.getPrismaFromContext)(ctx).author.update({
            ...args,
            ...(_count && (0, helpers_1.transformCountFieldIntoSelectRelationsCount)(_count)),
        });
    }
    async upsertOneAuthor(ctx, info, args) {
        const { _count } = (0, helpers_1.transformInfoIntoPrismaArgs)(info);
        return (0, helpers_1.getPrismaFromContext)(ctx).author.upsert({
            ...args,
            ...(_count && (0, helpers_1.transformCountFieldIntoSelectRelationsCount)(_count)),
        });
    }
};
__decorate([
    TypeGraphQL.Query(_returns => AggregateAuthor_1.AggregateAuthor, {
        nullable: false
    }),
    __param(0, TypeGraphQL.Ctx()),
    __param(1, TypeGraphQL.Info()),
    __param(2, TypeGraphQL.Args()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, Object, AggregateAuthorArgs_1.AggregateAuthorArgs]),
    __metadata("design:returntype", Promise)
], AuthorCrudResolver.prototype, "aggregateAuthor", null);
__decorate([
    TypeGraphQL.Mutation(_returns => AffectedRowsOutput_1.AffectedRowsOutput, {
        nullable: false
    }),
    __param(0, TypeGraphQL.Ctx()),
    __param(1, TypeGraphQL.Info()),
    __param(2, TypeGraphQL.Args()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, Object, CreateManyAuthorArgs_1.CreateManyAuthorArgs]),
    __metadata("design:returntype", Promise)
], AuthorCrudResolver.prototype, "createManyAuthor", null);
__decorate([
    TypeGraphQL.Mutation(_returns => Author_1.Author, {
        nullable: false
    }),
    __param(0, TypeGraphQL.Ctx()),
    __param(1, TypeGraphQL.Info()),
    __param(2, TypeGraphQL.Args()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, Object, CreateOneAuthorArgs_1.CreateOneAuthorArgs]),
    __metadata("design:returntype", Promise)
], AuthorCrudResolver.prototype, "createOneAuthor", null);
__decorate([
    TypeGraphQL.Mutation(_returns => AffectedRowsOutput_1.AffectedRowsOutput, {
        nullable: false
    }),
    __param(0, TypeGraphQL.Ctx()),
    __param(1, TypeGraphQL.Info()),
    __param(2, TypeGraphQL.Args()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, Object, DeleteManyAuthorArgs_1.DeleteManyAuthorArgs]),
    __metadata("design:returntype", Promise)
], AuthorCrudResolver.prototype, "deleteManyAuthor", null);
__decorate([
    TypeGraphQL.Mutation(_returns => Author_1.Author, {
        nullable: true
    }),
    __param(0, TypeGraphQL.Ctx()),
    __param(1, TypeGraphQL.Info()),
    __param(2, TypeGraphQL.Args()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, Object, DeleteOneAuthorArgs_1.DeleteOneAuthorArgs]),
    __metadata("design:returntype", Promise)
], AuthorCrudResolver.prototype, "deleteOneAuthor", null);
__decorate([
    TypeGraphQL.Query(_returns => Author_1.Author, {
        nullable: true
    }),
    __param(0, TypeGraphQL.Ctx()),
    __param(1, TypeGraphQL.Info()),
    __param(2, TypeGraphQL.Args()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, Object, FindFirstAuthorArgs_1.FindFirstAuthorArgs]),
    __metadata("design:returntype", Promise)
], AuthorCrudResolver.prototype, "findFirstAuthor", null);
__decorate([
    TypeGraphQL.Query(_returns => Author_1.Author, {
        nullable: true
    }),
    __param(0, TypeGraphQL.Ctx()),
    __param(1, TypeGraphQL.Info()),
    __param(2, TypeGraphQL.Args()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, Object, FindFirstAuthorOrThrowArgs_1.FindFirstAuthorOrThrowArgs]),
    __metadata("design:returntype", Promise)
], AuthorCrudResolver.prototype, "findFirstAuthorOrThrow", null);
__decorate([
    TypeGraphQL.Query(_returns => [Author_1.Author], {
        nullable: false
    }),
    __param(0, TypeGraphQL.Ctx()),
    __param(1, TypeGraphQL.Info()),
    __param(2, TypeGraphQL.Args()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, Object, FindManyAuthorArgs_1.FindManyAuthorArgs]),
    __metadata("design:returntype", Promise)
], AuthorCrudResolver.prototype, "authors", null);
__decorate([
    TypeGraphQL.Query(_returns => Author_1.Author, {
        nullable: true
    }),
    __param(0, TypeGraphQL.Ctx()),
    __param(1, TypeGraphQL.Info()),
    __param(2, TypeGraphQL.Args()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, Object, FindUniqueAuthorArgs_1.FindUniqueAuthorArgs]),
    __metadata("design:returntype", Promise)
], AuthorCrudResolver.prototype, "author", null);
__decorate([
    TypeGraphQL.Query(_returns => Author_1.Author, {
        nullable: true
    }),
    __param(0, TypeGraphQL.Ctx()),
    __param(1, TypeGraphQL.Info()),
    __param(2, TypeGraphQL.Args()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, Object, FindUniqueAuthorOrThrowArgs_1.FindUniqueAuthorOrThrowArgs]),
    __metadata("design:returntype", Promise)
], AuthorCrudResolver.prototype, "getAuthor", null);
__decorate([
    TypeGraphQL.Query(_returns => [AuthorGroupBy_1.AuthorGroupBy], {
        nullable: false
    }),
    __param(0, TypeGraphQL.Ctx()),
    __param(1, TypeGraphQL.Info()),
    __param(2, TypeGraphQL.Args()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, Object, GroupByAuthorArgs_1.GroupByAuthorArgs]),
    __metadata("design:returntype", Promise)
], AuthorCrudResolver.prototype, "groupByAuthor", null);
__decorate([
    TypeGraphQL.Mutation(_returns => AffectedRowsOutput_1.AffectedRowsOutput, {
        nullable: false
    }),
    __param(0, TypeGraphQL.Ctx()),
    __param(1, TypeGraphQL.Info()),
    __param(2, TypeGraphQL.Args()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, Object, UpdateManyAuthorArgs_1.UpdateManyAuthorArgs]),
    __metadata("design:returntype", Promise)
], AuthorCrudResolver.prototype, "updateManyAuthor", null);
__decorate([
    TypeGraphQL.Mutation(_returns => Author_1.Author, {
        nullable: true
    }),
    __param(0, TypeGraphQL.Ctx()),
    __param(1, TypeGraphQL.Info()),
    __param(2, TypeGraphQL.Args()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, Object, UpdateOneAuthorArgs_1.UpdateOneAuthorArgs]),
    __metadata("design:returntype", Promise)
], AuthorCrudResolver.prototype, "updateOneAuthor", null);
__decorate([
    TypeGraphQL.Mutation(_returns => Author_1.Author, {
        nullable: false
    }),
    __param(0, TypeGraphQL.Ctx()),
    __param(1, TypeGraphQL.Info()),
    __param(2, TypeGraphQL.Args()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, Object, UpsertOneAuthorArgs_1.UpsertOneAuthorArgs]),
    __metadata("design:returntype", Promise)
], AuthorCrudResolver.prototype, "upsertOneAuthor", null);
exports.AuthorCrudResolver = AuthorCrudResolver = __decorate([
    TypeGraphQL.Resolver(_of => Author_1.Author)
], AuthorCrudResolver);
//# sourceMappingURL=AuthorCrudResolver.js.map