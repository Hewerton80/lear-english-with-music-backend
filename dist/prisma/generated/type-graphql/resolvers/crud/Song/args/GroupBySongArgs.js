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
exports.GroupBySongArgs = void 0;
const TypeGraphQL = require("type-graphql");
const SongOrderByWithAggregationInput_1 = require("../../../inputs/SongOrderByWithAggregationInput");
const SongScalarWhereWithAggregatesInput_1 = require("../../../inputs/SongScalarWhereWithAggregatesInput");
const SongWhereInput_1 = require("../../../inputs/SongWhereInput");
const SongScalarFieldEnum_1 = require("../../../../enums/SongScalarFieldEnum");
let GroupBySongArgs = exports.GroupBySongArgs = class GroupBySongArgs {
};
__decorate([
    TypeGraphQL.Field(_type => SongWhereInput_1.SongWhereInput, {
        nullable: true
    }),
    __metadata("design:type", SongWhereInput_1.SongWhereInput)
], GroupBySongArgs.prototype, "where", void 0);
__decorate([
    TypeGraphQL.Field(_type => [SongOrderByWithAggregationInput_1.SongOrderByWithAggregationInput], {
        nullable: true
    }),
    __metadata("design:type", Array)
], GroupBySongArgs.prototype, "orderBy", void 0);
__decorate([
    TypeGraphQL.Field(_type => [SongScalarFieldEnum_1.SongScalarFieldEnum], {
        nullable: false
    }),
    __metadata("design:type", Array)
], GroupBySongArgs.prototype, "by", void 0);
__decorate([
    TypeGraphQL.Field(_type => SongScalarWhereWithAggregatesInput_1.SongScalarWhereWithAggregatesInput, {
        nullable: true
    }),
    __metadata("design:type", SongScalarWhereWithAggregatesInput_1.SongScalarWhereWithAggregatesInput)
], GroupBySongArgs.prototype, "having", void 0);
__decorate([
    TypeGraphQL.Field(_type => TypeGraphQL.Int, {
        nullable: true
    }),
    __metadata("design:type", Number)
], GroupBySongArgs.prototype, "take", void 0);
__decorate([
    TypeGraphQL.Field(_type => TypeGraphQL.Int, {
        nullable: true
    }),
    __metadata("design:type", Number)
], GroupBySongArgs.prototype, "skip", void 0);
exports.GroupBySongArgs = GroupBySongArgs = __decorate([
    TypeGraphQL.ArgsType()
], GroupBySongArgs);
//# sourceMappingURL=GroupBySongArgs.js.map