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
exports.SongAuthorGroupBy = void 0;
const TypeGraphQL = require("type-graphql");
const SongAuthorCountAggregate_1 = require("../outputs/SongAuthorCountAggregate");
const SongAuthorMaxAggregate_1 = require("../outputs/SongAuthorMaxAggregate");
const SongAuthorMinAggregate_1 = require("../outputs/SongAuthorMinAggregate");
let SongAuthorGroupBy = exports.SongAuthorGroupBy = class SongAuthorGroupBy {
};
__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: false
    }),
    __metadata("design:type", String)
], SongAuthorGroupBy.prototype, "authorId", void 0);
__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: false
    }),
    __metadata("design:type", String)
], SongAuthorGroupBy.prototype, "songId", void 0);
__decorate([
    TypeGraphQL.Field(_type => Date, {
        nullable: false
    }),
    __metadata("design:type", Date)
], SongAuthorGroupBy.prototype, "createdAt", void 0);
__decorate([
    TypeGraphQL.Field(_type => SongAuthorCountAggregate_1.SongAuthorCountAggregate, {
        nullable: true
    }),
    __metadata("design:type", SongAuthorCountAggregate_1.SongAuthorCountAggregate)
], SongAuthorGroupBy.prototype, "_count", void 0);
__decorate([
    TypeGraphQL.Field(_type => SongAuthorMinAggregate_1.SongAuthorMinAggregate, {
        nullable: true
    }),
    __metadata("design:type", SongAuthorMinAggregate_1.SongAuthorMinAggregate)
], SongAuthorGroupBy.prototype, "_min", void 0);
__decorate([
    TypeGraphQL.Field(_type => SongAuthorMaxAggregate_1.SongAuthorMaxAggregate, {
        nullable: true
    }),
    __metadata("design:type", SongAuthorMaxAggregate_1.SongAuthorMaxAggregate)
], SongAuthorGroupBy.prototype, "_max", void 0);
exports.SongAuthorGroupBy = SongAuthorGroupBy = __decorate([
    TypeGraphQL.ObjectType("SongAuthorGroupBy", {
        isAbstract: true
    })
], SongAuthorGroupBy);
//# sourceMappingURL=SongAuthorGroupBy.js.map