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
exports.SongOrderByWithAggregationInput = void 0;
const TypeGraphQL = require("type-graphql");
const SongCountOrderByAggregateInput_1 = require("../inputs/SongCountOrderByAggregateInput");
const SongMaxOrderByAggregateInput_1 = require("../inputs/SongMaxOrderByAggregateInput");
const SongMinOrderByAggregateInput_1 = require("../inputs/SongMinOrderByAggregateInput");
const SortOrderInput_1 = require("../inputs/SortOrderInput");
const SortOrder_1 = require("../../enums/SortOrder");
let SongOrderByWithAggregationInput = exports.SongOrderByWithAggregationInput = class SongOrderByWithAggregationInput {
};
__decorate([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    __metadata("design:type", String)
], SongOrderByWithAggregationInput.prototype, "id", void 0);
__decorate([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    __metadata("design:type", String)
], SongOrderByWithAggregationInput.prototype, "title", void 0);
__decorate([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    __metadata("design:type", String)
], SongOrderByWithAggregationInput.prototype, "slug", void 0);
__decorate([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    __metadata("design:type", String)
], SongOrderByWithAggregationInput.prototype, "url", void 0);
__decorate([
    TypeGraphQL.Field(_type => SortOrderInput_1.SortOrderInput, {
        nullable: true
    }),
    __metadata("design:type", SortOrderInput_1.SortOrderInput)
], SongOrderByWithAggregationInput.prototype, "lyric", void 0);
__decorate([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    __metadata("design:type", String)
], SongOrderByWithAggregationInput.prototype, "createdAt", void 0);
__decorate([
    TypeGraphQL.Field(_type => SongCountOrderByAggregateInput_1.SongCountOrderByAggregateInput, {
        nullable: true
    }),
    __metadata("design:type", SongCountOrderByAggregateInput_1.SongCountOrderByAggregateInput)
], SongOrderByWithAggregationInput.prototype, "_count", void 0);
__decorate([
    TypeGraphQL.Field(_type => SongMaxOrderByAggregateInput_1.SongMaxOrderByAggregateInput, {
        nullable: true
    }),
    __metadata("design:type", SongMaxOrderByAggregateInput_1.SongMaxOrderByAggregateInput)
], SongOrderByWithAggregationInput.prototype, "_max", void 0);
__decorate([
    TypeGraphQL.Field(_type => SongMinOrderByAggregateInput_1.SongMinOrderByAggregateInput, {
        nullable: true
    }),
    __metadata("design:type", SongMinOrderByAggregateInput_1.SongMinOrderByAggregateInput)
], SongOrderByWithAggregationInput.prototype, "_min", void 0);
exports.SongOrderByWithAggregationInput = SongOrderByWithAggregationInput = __decorate([
    TypeGraphQL.InputType("SongOrderByWithAggregationInput", {
        isAbstract: true
    })
], SongOrderByWithAggregationInput);
//# sourceMappingURL=SongOrderByWithAggregationInput.js.map