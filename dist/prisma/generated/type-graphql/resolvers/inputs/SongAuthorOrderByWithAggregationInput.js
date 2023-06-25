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
exports.SongAuthorOrderByWithAggregationInput = void 0;
const TypeGraphQL = require("type-graphql");
const SongAuthorCountOrderByAggregateInput_1 = require("../inputs/SongAuthorCountOrderByAggregateInput");
const SongAuthorMaxOrderByAggregateInput_1 = require("../inputs/SongAuthorMaxOrderByAggregateInput");
const SongAuthorMinOrderByAggregateInput_1 = require("../inputs/SongAuthorMinOrderByAggregateInput");
const SortOrder_1 = require("../../enums/SortOrder");
let SongAuthorOrderByWithAggregationInput = exports.SongAuthorOrderByWithAggregationInput = class SongAuthorOrderByWithAggregationInput {
};
__decorate([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    __metadata("design:type", String)
], SongAuthorOrderByWithAggregationInput.prototype, "authorId", void 0);
__decorate([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    __metadata("design:type", String)
], SongAuthorOrderByWithAggregationInput.prototype, "songId", void 0);
__decorate([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    __metadata("design:type", String)
], SongAuthorOrderByWithAggregationInput.prototype, "createdAt", void 0);
__decorate([
    TypeGraphQL.Field(_type => SongAuthorCountOrderByAggregateInput_1.SongAuthorCountOrderByAggregateInput, {
        nullable: true
    }),
    __metadata("design:type", SongAuthorCountOrderByAggregateInput_1.SongAuthorCountOrderByAggregateInput)
], SongAuthorOrderByWithAggregationInput.prototype, "_count", void 0);
__decorate([
    TypeGraphQL.Field(_type => SongAuthorMaxOrderByAggregateInput_1.SongAuthorMaxOrderByAggregateInput, {
        nullable: true
    }),
    __metadata("design:type", SongAuthorMaxOrderByAggregateInput_1.SongAuthorMaxOrderByAggregateInput)
], SongAuthorOrderByWithAggregationInput.prototype, "_max", void 0);
__decorate([
    TypeGraphQL.Field(_type => SongAuthorMinOrderByAggregateInput_1.SongAuthorMinOrderByAggregateInput, {
        nullable: true
    }),
    __metadata("design:type", SongAuthorMinOrderByAggregateInput_1.SongAuthorMinOrderByAggregateInput)
], SongAuthorOrderByWithAggregationInput.prototype, "_min", void 0);
exports.SongAuthorOrderByWithAggregationInput = SongAuthorOrderByWithAggregationInput = __decorate([
    TypeGraphQL.InputType("SongAuthorOrderByWithAggregationInput", {
        isAbstract: true
    })
], SongAuthorOrderByWithAggregationInput);
//# sourceMappingURL=SongAuthorOrderByWithAggregationInput.js.map