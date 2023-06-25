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
var SongAuthorScalarWhereWithAggregatesInput_1;
Object.defineProperty(exports, "__esModule", { value: true });
exports.SongAuthorScalarWhereWithAggregatesInput = void 0;
const TypeGraphQL = require("type-graphql");
const DateTimeWithAggregatesFilter_1 = require("../inputs/DateTimeWithAggregatesFilter");
const StringWithAggregatesFilter_1 = require("../inputs/StringWithAggregatesFilter");
let SongAuthorScalarWhereWithAggregatesInput = exports.SongAuthorScalarWhereWithAggregatesInput = SongAuthorScalarWhereWithAggregatesInput_1 = class SongAuthorScalarWhereWithAggregatesInput {
};
__decorate([
    TypeGraphQL.Field(_type => [SongAuthorScalarWhereWithAggregatesInput_1], {
        nullable: true
    }),
    __metadata("design:type", Array)
], SongAuthorScalarWhereWithAggregatesInput.prototype, "AND", void 0);
__decorate([
    TypeGraphQL.Field(_type => [SongAuthorScalarWhereWithAggregatesInput_1], {
        nullable: true
    }),
    __metadata("design:type", Array)
], SongAuthorScalarWhereWithAggregatesInput.prototype, "OR", void 0);
__decorate([
    TypeGraphQL.Field(_type => [SongAuthorScalarWhereWithAggregatesInput_1], {
        nullable: true
    }),
    __metadata("design:type", Array)
], SongAuthorScalarWhereWithAggregatesInput.prototype, "NOT", void 0);
__decorate([
    TypeGraphQL.Field(_type => StringWithAggregatesFilter_1.StringWithAggregatesFilter, {
        nullable: true
    }),
    __metadata("design:type", StringWithAggregatesFilter_1.StringWithAggregatesFilter)
], SongAuthorScalarWhereWithAggregatesInput.prototype, "authorId", void 0);
__decorate([
    TypeGraphQL.Field(_type => StringWithAggregatesFilter_1.StringWithAggregatesFilter, {
        nullable: true
    }),
    __metadata("design:type", StringWithAggregatesFilter_1.StringWithAggregatesFilter)
], SongAuthorScalarWhereWithAggregatesInput.prototype, "songId", void 0);
__decorate([
    TypeGraphQL.Field(_type => DateTimeWithAggregatesFilter_1.DateTimeWithAggregatesFilter, {
        nullable: true
    }),
    __metadata("design:type", DateTimeWithAggregatesFilter_1.DateTimeWithAggregatesFilter)
], SongAuthorScalarWhereWithAggregatesInput.prototype, "createdAt", void 0);
exports.SongAuthorScalarWhereWithAggregatesInput = SongAuthorScalarWhereWithAggregatesInput = SongAuthorScalarWhereWithAggregatesInput_1 = __decorate([
    TypeGraphQL.InputType("SongAuthorScalarWhereWithAggregatesInput", {
        isAbstract: true
    })
], SongAuthorScalarWhereWithAggregatesInput);
//# sourceMappingURL=SongAuthorScalarWhereWithAggregatesInput.js.map