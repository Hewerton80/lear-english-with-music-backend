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
var SongWhereInput_1;
Object.defineProperty(exports, "__esModule", { value: true });
exports.SongWhereInput = void 0;
const TypeGraphQL = require("type-graphql");
const DateTimeFilter_1 = require("../inputs/DateTimeFilter");
const SongAuthorListRelationFilter_1 = require("../inputs/SongAuthorListRelationFilter");
const StringFilter_1 = require("../inputs/StringFilter");
const StringNullableFilter_1 = require("../inputs/StringNullableFilter");
let SongWhereInput = exports.SongWhereInput = SongWhereInput_1 = class SongWhereInput {
};
__decorate([
    TypeGraphQL.Field(_type => [SongWhereInput_1], {
        nullable: true
    }),
    __metadata("design:type", Array)
], SongWhereInput.prototype, "AND", void 0);
__decorate([
    TypeGraphQL.Field(_type => [SongWhereInput_1], {
        nullable: true
    }),
    __metadata("design:type", Array)
], SongWhereInput.prototype, "OR", void 0);
__decorate([
    TypeGraphQL.Field(_type => [SongWhereInput_1], {
        nullable: true
    }),
    __metadata("design:type", Array)
], SongWhereInput.prototype, "NOT", void 0);
__decorate([
    TypeGraphQL.Field(_type => StringFilter_1.StringFilter, {
        nullable: true
    }),
    __metadata("design:type", StringFilter_1.StringFilter)
], SongWhereInput.prototype, "id", void 0);
__decorate([
    TypeGraphQL.Field(_type => StringFilter_1.StringFilter, {
        nullable: true
    }),
    __metadata("design:type", StringFilter_1.StringFilter)
], SongWhereInput.prototype, "title", void 0);
__decorate([
    TypeGraphQL.Field(_type => StringFilter_1.StringFilter, {
        nullable: true
    }),
    __metadata("design:type", StringFilter_1.StringFilter)
], SongWhereInput.prototype, "slug", void 0);
__decorate([
    TypeGraphQL.Field(_type => StringFilter_1.StringFilter, {
        nullable: true
    }),
    __metadata("design:type", StringFilter_1.StringFilter)
], SongWhereInput.prototype, "url", void 0);
__decorate([
    TypeGraphQL.Field(_type => StringNullableFilter_1.StringNullableFilter, {
        nullable: true
    }),
    __metadata("design:type", StringNullableFilter_1.StringNullableFilter)
], SongWhereInput.prototype, "lyric", void 0);
__decorate([
    TypeGraphQL.Field(_type => DateTimeFilter_1.DateTimeFilter, {
        nullable: true
    }),
    __metadata("design:type", DateTimeFilter_1.DateTimeFilter)
], SongWhereInput.prototype, "createdAt", void 0);
__decorate([
    TypeGraphQL.Field(_type => SongAuthorListRelationFilter_1.SongAuthorListRelationFilter, {
        nullable: true
    }),
    __metadata("design:type", SongAuthorListRelationFilter_1.SongAuthorListRelationFilter)
], SongWhereInput.prototype, "authors", void 0);
exports.SongWhereInput = SongWhereInput = SongWhereInput_1 = __decorate([
    TypeGraphQL.InputType("SongWhereInput", {
        isAbstract: true
    })
], SongWhereInput);
//# sourceMappingURL=SongWhereInput.js.map