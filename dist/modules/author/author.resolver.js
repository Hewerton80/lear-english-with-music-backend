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
exports.AuthorResolver = void 0;
const type_graphql_1 = require("type-graphql");
const type_graphql_2 = require("../../prisma/generated/type-graphql");
const typedi_1 = require("typedi");
const author_model_1 = require("./author.model");
const pagination_inputs_1 = require("../../common/inputs/pagination.inputs");
const author_service_1 = require("./author.service");
require("./author.validations-enhace-map");
let AuthorResolver = exports.AuthorResolver = class AuthorResolver {
    constructor(authorService) {
        this.authorService = authorService;
    }
    author(findUniqueAuthorArgs) {
        return this.authorService.findOne(findUniqueAuthorArgs);
    }
    authors(paginationInput, orderBy, where) {
        return this.authorService.findMany({
            paginationInput: paginationInput,
            orderBy,
            where,
        });
    }
    createAuthor(authorCreateInput) {
        return this.authorService.create(authorCreateInput);
    }
    updateAuthor(data, where) {
        return this.authorService.update(data, where);
    }
};
__decorate([
    (0, type_graphql_1.Query)(() => type_graphql_2.Author),
    __param(0, (0, type_graphql_1.Args)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [type_graphql_2.FindUniqueAuthorArgs]),
    __metadata("design:returntype", void 0)
], AuthorResolver.prototype, "author", null);
__decorate([
    (0, type_graphql_1.Query)(() => author_model_1.PaginedAuthor),
    __param(0, (0, type_graphql_1.Arg)('input')),
    __param(1, (0, type_graphql_1.Arg)('orderBy', { nullable: true })),
    __param(2, (0, type_graphql_1.Arg)('where', { nullable: true })),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [pagination_inputs_1.PaginationInput,
        type_graphql_2.AuthorOrderByWithRelationInput,
        type_graphql_2.AuthorWhereInput]),
    __metadata("design:returntype", void 0)
], AuthorResolver.prototype, "authors", null);
__decorate([
    (0, type_graphql_1.Mutation)(() => type_graphql_2.Author),
    __param(0, (0, type_graphql_1.Arg)('data')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [type_graphql_2.AuthorCreateInput]),
    __metadata("design:returntype", void 0)
], AuthorResolver.prototype, "createAuthor", null);
__decorate([
    (0, type_graphql_1.Mutation)(() => type_graphql_2.Author),
    __param(0, (0, type_graphql_1.Arg)('data')),
    __param(1, (0, type_graphql_1.Arg)('where')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [type_graphql_2.AuthorUpdateInput,
        type_graphql_2.AuthorWhereUniqueInput]),
    __metadata("design:returntype", void 0)
], AuthorResolver.prototype, "updateAuthor", null);
exports.AuthorResolver = AuthorResolver = __decorate([
    (0, typedi_1.Service)(),
    (0, type_graphql_1.Resolver)(type_graphql_2.Author),
    __metadata("design:paramtypes", [author_service_1.AuthorService])
], AuthorResolver);
//# sourceMappingURL=author.resolver.js.map