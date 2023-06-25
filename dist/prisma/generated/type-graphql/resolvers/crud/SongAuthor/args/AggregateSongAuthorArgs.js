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
exports.AggregateSongAuthorArgs = void 0;
const TypeGraphQL = require("type-graphql");
const SongAuthorOrderByWithRelationInput_1 = require("../../../inputs/SongAuthorOrderByWithRelationInput");
const SongAuthorWhereInput_1 = require("../../../inputs/SongAuthorWhereInput");
const SongAuthorWhereUniqueInput_1 = require("../../../inputs/SongAuthorWhereUniqueInput");
let AggregateSongAuthorArgs = exports.AggregateSongAuthorArgs = class AggregateSongAuthorArgs {
};
__decorate([
    TypeGraphQL.Field(_type => SongAuthorWhereInput_1.SongAuthorWhereInput, {
        nullable: true
    }),
    __metadata("design:type", SongAuthorWhereInput_1.SongAuthorWhereInput)
], AggregateSongAuthorArgs.prototype, "where", void 0);
__decorate([
    TypeGraphQL.Field(_type => [SongAuthorOrderByWithRelationInput_1.SongAuthorOrderByWithRelationInput], {
        nullable: true
    }),
    __metadata("design:type", Array)
], AggregateSongAuthorArgs.prototype, "orderBy", void 0);
__decorate([
    TypeGraphQL.Field(_type => SongAuthorWhereUniqueInput_1.SongAuthorWhereUniqueInput, {
        nullable: true
    }),
    __metadata("design:type", SongAuthorWhereUniqueInput_1.SongAuthorWhereUniqueInput)
], AggregateSongAuthorArgs.prototype, "cursor", void 0);
__decorate([
    TypeGraphQL.Field(_type => TypeGraphQL.Int, {
        nullable: true
    }),
    __metadata("design:type", Number)
], AggregateSongAuthorArgs.prototype, "take", void 0);
__decorate([
    TypeGraphQL.Field(_type => TypeGraphQL.Int, {
        nullable: true
    }),
    __metadata("design:type", Number)
], AggregateSongAuthorArgs.prototype, "skip", void 0);
exports.AggregateSongAuthorArgs = AggregateSongAuthorArgs = __decorate([
    TypeGraphQL.ArgsType()
], AggregateSongAuthorArgs);
//# sourceMappingURL=AggregateSongAuthorArgs.js.map