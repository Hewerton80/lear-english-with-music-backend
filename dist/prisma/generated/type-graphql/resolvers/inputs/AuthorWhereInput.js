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
var AuthorWhereInput_1;
Object.defineProperty(exports, "__esModule", { value: true });
exports.AuthorWhereInput = void 0;
const TypeGraphQL = require("type-graphql");
const DateTimeFilter_1 = require("../inputs/DateTimeFilter");
const SongAuthorListRelationFilter_1 = require("../inputs/SongAuthorListRelationFilter");
const StringFilter_1 = require("../inputs/StringFilter");
let AuthorWhereInput = exports.AuthorWhereInput = AuthorWhereInput_1 = class AuthorWhereInput {
};
__decorate([
    TypeGraphQL.Field(_type => [AuthorWhereInput_1], {
        nullable: true
    }),
    __metadata("design:type", Array)
], AuthorWhereInput.prototype, "AND", void 0);
__decorate([
    TypeGraphQL.Field(_type => [AuthorWhereInput_1], {
        nullable: true
    }),
    __metadata("design:type", Array)
], AuthorWhereInput.prototype, "OR", void 0);
__decorate([
    TypeGraphQL.Field(_type => [AuthorWhereInput_1], {
        nullable: true
    }),
    __metadata("design:type", Array)
], AuthorWhereInput.prototype, "NOT", void 0);
__decorate([
    TypeGraphQL.Field(_type => StringFilter_1.StringFilter, {
        nullable: true
    }),
    __metadata("design:type", StringFilter_1.StringFilter)
], AuthorWhereInput.prototype, "id", void 0);
__decorate([
    TypeGraphQL.Field(_type => StringFilter_1.StringFilter, {
        nullable: true
    }),
    __metadata("design:type", StringFilter_1.StringFilter)
], AuthorWhereInput.prototype, "name", void 0);
__decorate([
    TypeGraphQL.Field(_type => StringFilter_1.StringFilter, {
        nullable: true
    }),
    __metadata("design:type", StringFilter_1.StringFilter)
], AuthorWhereInput.prototype, "slug", void 0);
__decorate([
    TypeGraphQL.Field(_type => DateTimeFilter_1.DateTimeFilter, {
        nullable: true
    }),
    __metadata("design:type", DateTimeFilter_1.DateTimeFilter)
], AuthorWhereInput.prototype, "createdAt", void 0);
__decorate([
    TypeGraphQL.Field(_type => SongAuthorListRelationFilter_1.SongAuthorListRelationFilter, {
        nullable: true
    }),
    __metadata("design:type", SongAuthorListRelationFilter_1.SongAuthorListRelationFilter)
], AuthorWhereInput.prototype, "songs", void 0);
exports.AuthorWhereInput = AuthorWhereInput = AuthorWhereInput_1 = __decorate([
    TypeGraphQL.InputType("AuthorWhereInput", {
        isAbstract: true
    })
], AuthorWhereInput);
//# sourceMappingURL=AuthorWhereInput.js.map