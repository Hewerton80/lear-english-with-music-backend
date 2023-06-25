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
exports.SongGroupBy = void 0;
const TypeGraphQL = require("type-graphql");
const SongCountAggregate_1 = require("../outputs/SongCountAggregate");
const SongMaxAggregate_1 = require("../outputs/SongMaxAggregate");
const SongMinAggregate_1 = require("../outputs/SongMinAggregate");
let SongGroupBy = exports.SongGroupBy = class SongGroupBy {
};
__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: false
    }),
    __metadata("design:type", String)
], SongGroupBy.prototype, "id", void 0);
__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: false
    }),
    __metadata("design:type", String)
], SongGroupBy.prototype, "title", void 0);
__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: false
    }),
    __metadata("design:type", String)
], SongGroupBy.prototype, "slug", void 0);
__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: false
    }),
    __metadata("design:type", String)
], SongGroupBy.prototype, "url", void 0);
__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: true
    }),
    __metadata("design:type", String)
], SongGroupBy.prototype, "lyric", void 0);
__decorate([
    TypeGraphQL.Field(_type => Date, {
        nullable: false
    }),
    __metadata("design:type", Date)
], SongGroupBy.prototype, "createdAt", void 0);
__decorate([
    TypeGraphQL.Field(_type => SongCountAggregate_1.SongCountAggregate, {
        nullable: true
    }),
    __metadata("design:type", SongCountAggregate_1.SongCountAggregate)
], SongGroupBy.prototype, "_count", void 0);
__decorate([
    TypeGraphQL.Field(_type => SongMinAggregate_1.SongMinAggregate, {
        nullable: true
    }),
    __metadata("design:type", SongMinAggregate_1.SongMinAggregate)
], SongGroupBy.prototype, "_min", void 0);
__decorate([
    TypeGraphQL.Field(_type => SongMaxAggregate_1.SongMaxAggregate, {
        nullable: true
    }),
    __metadata("design:type", SongMaxAggregate_1.SongMaxAggregate)
], SongGroupBy.prototype, "_max", void 0);
exports.SongGroupBy = SongGroupBy = __decorate([
    TypeGraphQL.ObjectType("SongGroupBy", {
        isAbstract: true
    })
], SongGroupBy);
//# sourceMappingURL=SongGroupBy.js.map