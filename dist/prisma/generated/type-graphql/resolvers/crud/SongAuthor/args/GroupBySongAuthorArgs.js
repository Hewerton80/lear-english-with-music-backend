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
Object.defineProperty(exports, "__esModule", { value: true });
exports.GroupBySongAuthorArgs = void 0;
const TypeGraphQL = require("type-graphql");
const SongAuthorOrderByWithAggregationInput_1 = require("../../../inputs/SongAuthorOrderByWithAggregationInput");
const SongAuthorScalarWhereWithAggregatesInput_1 = require("../../../inputs/SongAuthorScalarWhereWithAggregatesInput");
const SongAuthorWhereInput_1 = require("../../../inputs/SongAuthorWhereInput");
const SongAuthorScalarFieldEnum_1 = require("../../../../enums/SongAuthorScalarFieldEnum");
let GroupBySongAuthorArgs = exports.GroupBySongAuthorArgs = class GroupBySongAuthorArgs {
};
__decorate([
    TypeGraphQL.Field(_type => SongAuthorWhereInput_1.SongAuthorWhereInput, {
        nullable: true
    }),
    __metadata("design:type", SongAuthorWhereInput_1.SongAuthorWhereInput)
], GroupBySongAuthorArgs.prototype, "where", void 0);
__decorate([
    TypeGraphQL.Field(_type => [SongAuthorOrderByWithAggregationInput_1.SongAuthorOrderByWithAggregationInput], {
        nullable: true
    }),
    __metadata("design:type", Array)
], GroupBySongAuthorArgs.prototype, "orderBy", void 0);
__decorate([
    TypeGraphQL.Field(_type => [SongAuthorScalarFieldEnum_1.SongAuthorScalarFieldEnum], {
        nullable: false
    }),
    __metadata("design:type", Array)
], GroupBySongAuthorArgs.prototype, "by", void 0);
__decorate([
    TypeGraphQL.Field(_type => SongAuthorScalarWhereWithAggregatesInput_1.SongAuthorScalarWhereWithAggregatesInput, {
        nullable: true
    }),
    __metadata("design:type", SongAuthorScalarWhereWithAggregatesInput_1.SongAuthorScalarWhereWithAggregatesInput)
], GroupBySongAuthorArgs.prototype, "having", void 0);
__decorate([
    TypeGraphQL.Field(_type => TypeGraphQL.Int, {
        nullable: true
    }),
    __metadata("design:type", Number)
], GroupBySongAuthorArgs.prototype, "take", void 0);
__decorate([
    TypeGraphQL.Field(_type => TypeGraphQL.Int, {
        nullable: true
    }),
    __metadata("design:type", Number)
], GroupBySongAuthorArgs.prototype, "skip", void 0);
exports.GroupBySongAuthorArgs = GroupBySongAuthorArgs = __decorate([
    TypeGraphQL.ArgsType()
], GroupBySongAuthorArgs);
//# sourceMappingURL=GroupBySongAuthorArgs.js.map