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
exports.AggregateSongAuthor = void 0;
const TypeGraphQL = require("type-graphql");
const SongAuthorCountAggregate_1 = require("../outputs/SongAuthorCountAggregate");
const SongAuthorMaxAggregate_1 = require("../outputs/SongAuthorMaxAggregate");
const SongAuthorMinAggregate_1 = require("../outputs/SongAuthorMinAggregate");
let AggregateSongAuthor = exports.AggregateSongAuthor = class AggregateSongAuthor {
};
__decorate([
    TypeGraphQL.Field(_type => SongAuthorCountAggregate_1.SongAuthorCountAggregate, {
        nullable: true
    }),
    __metadata("design:type", SongAuthorCountAggregate_1.SongAuthorCountAggregate)
], AggregateSongAuthor.prototype, "_count", void 0);
__decorate([
    TypeGraphQL.Field(_type => SongAuthorMinAggregate_1.SongAuthorMinAggregate, {
        nullable: true
    }),
    __metadata("design:type", SongAuthorMinAggregate_1.SongAuthorMinAggregate)
], AggregateSongAuthor.prototype, "_min", void 0);
__decorate([
    TypeGraphQL.Field(_type => SongAuthorMaxAggregate_1.SongAuthorMaxAggregate, {
        nullable: true
    }),
    __metadata("design:type", SongAuthorMaxAggregate_1.SongAuthorMaxAggregate)
], AggregateSongAuthor.prototype, "_max", void 0);
exports.AggregateSongAuthor = AggregateSongAuthor = __decorate([
    TypeGraphQL.ObjectType("AggregateSongAuthor", {
        isAbstract: true
    })
], AggregateSongAuthor);
//# sourceMappingURL=AggregateSongAuthor.js.map