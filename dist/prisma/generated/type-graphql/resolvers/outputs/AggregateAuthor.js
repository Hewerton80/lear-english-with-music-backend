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
exports.AggregateAuthor = void 0;
const TypeGraphQL = require("type-graphql");
const AuthorCountAggregate_1 = require("../outputs/AuthorCountAggregate");
const AuthorMaxAggregate_1 = require("../outputs/AuthorMaxAggregate");
const AuthorMinAggregate_1 = require("../outputs/AuthorMinAggregate");
let AggregateAuthor = exports.AggregateAuthor = class AggregateAuthor {
};
__decorate([
    TypeGraphQL.Field(_type => AuthorCountAggregate_1.AuthorCountAggregate, {
        nullable: true
    }),
    __metadata("design:type", AuthorCountAggregate_1.AuthorCountAggregate)
], AggregateAuthor.prototype, "_count", void 0);
__decorate([
    TypeGraphQL.Field(_type => AuthorMinAggregate_1.AuthorMinAggregate, {
        nullable: true
    }),
    __metadata("design:type", AuthorMinAggregate_1.AuthorMinAggregate)
], AggregateAuthor.prototype, "_min", void 0);
__decorate([
    TypeGraphQL.Field(_type => AuthorMaxAggregate_1.AuthorMaxAggregate, {
        nullable: true
    }),
    __metadata("design:type", AuthorMaxAggregate_1.AuthorMaxAggregate)
], AggregateAuthor.prototype, "_max", void 0);
exports.AggregateAuthor = AggregateAuthor = __decorate([
    TypeGraphQL.ObjectType("AggregateAuthor", {
        isAbstract: true
    })
], AggregateAuthor);
//# sourceMappingURL=AggregateAuthor.js.map