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
exports.AuthorRelationsResolver = void 0;
const TypeGraphQL = require("type-graphql");
const Author_1 = require("../../../models/Author");
const SongAuthor_1 = require("../../../models/SongAuthor");
const AuthorSongsArgs_1 = require("./args/AuthorSongsArgs");
const helpers_1 = require("../../../helpers");
let AuthorRelationsResolver = exports.AuthorRelationsResolver = class AuthorRelationsResolver {
    async songs(author, ctx, info, args) {
        const { _count } = (0, helpers_1.transformInfoIntoPrismaArgs)(info);
        return (0, helpers_1.getPrismaFromContext)(ctx).author.findUniqueOrThrow({
            where: {
                id: author.id,
            },
        }).songs({
            ...args,
            ...(_count && (0, helpers_1.transformCountFieldIntoSelectRelationsCount)(_count)),
        });
    }
};
__decorate([
    TypeGraphQL.FieldResolver(_type => [SongAuthor_1.SongAuthor], {
        nullable: false
    }),
    __param(0, TypeGraphQL.Root()),
    __param(1, TypeGraphQL.Ctx()),
    __param(2, TypeGraphQL.Info()),
    __param(3, TypeGraphQL.Args()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Author_1.Author, Object, Object, AuthorSongsArgs_1.AuthorSongsArgs]),
    __metadata("design:returntype", Promise)
], AuthorRelationsResolver.prototype, "songs", null);
exports.AuthorRelationsResolver = AuthorRelationsResolver = __decorate([
    TypeGraphQL.Resolver(_of => Author_1.Author)
], AuthorRelationsResolver);
//# sourceMappingURL=AuthorRelationsResolver.js.map