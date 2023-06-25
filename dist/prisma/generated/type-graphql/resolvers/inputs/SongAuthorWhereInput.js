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
var SongAuthorWhereInput_1;
Object.defineProperty(exports, "__esModule", { value: true });
exports.SongAuthorWhereInput = void 0;
const TypeGraphQL = require("type-graphql");
const AuthorRelationFilter_1 = require("../inputs/AuthorRelationFilter");
const DateTimeFilter_1 = require("../inputs/DateTimeFilter");
const SongRelationFilter_1 = require("../inputs/SongRelationFilter");
const StringFilter_1 = require("../inputs/StringFilter");
let SongAuthorWhereInput = exports.SongAuthorWhereInput = SongAuthorWhereInput_1 = class SongAuthorWhereInput {
};
__decorate([
    TypeGraphQL.Field(_type => [SongAuthorWhereInput_1], {
        nullable: true
    }),
    __metadata("design:type", Array)
], SongAuthorWhereInput.prototype, "AND", void 0);
__decorate([
    TypeGraphQL.Field(_type => [SongAuthorWhereInput_1], {
        nullable: true
    }),
    __metadata("design:type", Array)
], SongAuthorWhereInput.prototype, "OR", void 0);
__decorate([
    TypeGraphQL.Field(_type => [SongAuthorWhereInput_1], {
        nullable: true
    }),
    __metadata("design:type", Array)
], SongAuthorWhereInput.prototype, "NOT", void 0);
__decorate([
    TypeGraphQL.Field(_type => StringFilter_1.StringFilter, {
        nullable: true
    }),
    __metadata("design:type", StringFilter_1.StringFilter)
], SongAuthorWhereInput.prototype, "authorId", void 0);
__decorate([
    TypeGraphQL.Field(_type => StringFilter_1.StringFilter, {
        nullable: true
    }),
    __metadata("design:type", StringFilter_1.StringFilter)
], SongAuthorWhereInput.prototype, "songId", void 0);
__decorate([
    TypeGraphQL.Field(_type => DateTimeFilter_1.DateTimeFilter, {
        nullable: true
    }),
    __metadata("design:type", DateTimeFilter_1.DateTimeFilter)
], SongAuthorWhereInput.prototype, "createdAt", void 0);
__decorate([
    TypeGraphQL.Field(_type => AuthorRelationFilter_1.AuthorRelationFilter, {
        nullable: true
    }),
    __metadata("design:type", AuthorRelationFilter_1.AuthorRelationFilter)
], SongAuthorWhereInput.prototype, "author", void 0);
__decorate([
    TypeGraphQL.Field(_type => SongRelationFilter_1.SongRelationFilter, {
        nullable: true
    }),
    __metadata("design:type", SongRelationFilter_1.SongRelationFilter)
], SongAuthorWhereInput.prototype, "song", void 0);
exports.SongAuthorWhereInput = SongAuthorWhereInput = SongAuthorWhereInput_1 = __decorate([
    TypeGraphQL.InputType("SongAuthorWhereInput", {
        isAbstract: true
    })
], SongAuthorWhereInput);
//# sourceMappingURL=SongAuthorWhereInput.js.map