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
exports.AuthorOrderByWithAggregationInput = void 0;
const TypeGraphQL = require("type-graphql");
const AuthorCountOrderByAggregateInput_1 = require("../inputs/AuthorCountOrderByAggregateInput");
const AuthorMaxOrderByAggregateInput_1 = require("../inputs/AuthorMaxOrderByAggregateInput");
const AuthorMinOrderByAggregateInput_1 = require("../inputs/AuthorMinOrderByAggregateInput");
const SortOrder_1 = require("../../enums/SortOrder");
let AuthorOrderByWithAggregationInput = exports.AuthorOrderByWithAggregationInput = class AuthorOrderByWithAggregationInput {
};
__decorate([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    __metadata("design:type", String)
], AuthorOrderByWithAggregationInput.prototype, "id", void 0);
__decorate([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    __metadata("design:type", String)
], AuthorOrderByWithAggregationInput.prototype, "name", void 0);
__decorate([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    __metadata("design:type", String)
], AuthorOrderByWithAggregationInput.prototype, "slug", void 0);
__decorate([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    __metadata("design:type", String)
], AuthorOrderByWithAggregationInput.prototype, "createdAt", void 0);
__decorate([
    TypeGraphQL.Field(_type => AuthorCountOrderByAggregateInput_1.AuthorCountOrderByAggregateInput, {
        nullable: true
    }),
    __metadata("design:type", AuthorCountOrderByAggregateInput_1.AuthorCountOrderByAggregateInput)
], AuthorOrderByWithAggregationInput.prototype, "_count", void 0);
__decorate([
    TypeGraphQL.Field(_type => AuthorMaxOrderByAggregateInput_1.AuthorMaxOrderByAggregateInput, {
        nullable: true
    }),
    __metadata("design:type", AuthorMaxOrderByAggregateInput_1.AuthorMaxOrderByAggregateInput)
], AuthorOrderByWithAggregationInput.prototype, "_max", void 0);
__decorate([
    TypeGraphQL.Field(_type => AuthorMinOrderByAggregateInput_1.AuthorMinOrderByAggregateInput, {
        nullable: true
    }),
    __metadata("design:type", AuthorMinOrderByAggregateInput_1.AuthorMinOrderByAggregateInput)
], AuthorOrderByWithAggregationInput.prototype, "_min", void 0);
exports.AuthorOrderByWithAggregationInput = AuthorOrderByWithAggregationInput = __decorate([
    TypeGraphQL.InputType("AuthorOrderByWithAggregationInput", {
        isAbstract: true
    })
], AuthorOrderByWithAggregationInput);
//# sourceMappingURL=AuthorOrderByWithAggregationInput.js.map