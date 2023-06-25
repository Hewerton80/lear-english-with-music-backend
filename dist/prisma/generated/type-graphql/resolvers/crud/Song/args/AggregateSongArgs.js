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
exports.AggregateSongArgs = void 0;
const TypeGraphQL = require("type-graphql");
const SongOrderByWithRelationInput_1 = require("../../../inputs/SongOrderByWithRelationInput");
const SongWhereInput_1 = require("../../../inputs/SongWhereInput");
const SongWhereUniqueInput_1 = require("../../../inputs/SongWhereUniqueInput");
let AggregateSongArgs = exports.AggregateSongArgs = class AggregateSongArgs {
};
__decorate([
    TypeGraphQL.Field(_type => SongWhereInput_1.SongWhereInput, {
        nullable: true
    }),
    __metadata("design:type", SongWhereInput_1.SongWhereInput)
], AggregateSongArgs.prototype, "where", void 0);
__decorate([
    TypeGraphQL.Field(_type => [SongOrderByWithRelationInput_1.SongOrderByWithRelationInput], {
        nullable: true
    }),
    __metadata("design:type", Array)
], AggregateSongArgs.prototype, "orderBy", void 0);
__decorate([
    TypeGraphQL.Field(_type => SongWhereUniqueInput_1.SongWhereUniqueInput, {
        nullable: true
    }),
    __metadata("design:type", SongWhereUniqueInput_1.SongWhereUniqueInput)
], AggregateSongArgs.prototype, "cursor", void 0);
__decorate([
    TypeGraphQL.Field(_type => TypeGraphQL.Int, {
        nullable: true
    }),
    __metadata("design:type", Number)
], AggregateSongArgs.prototype, "take", void 0);
__decorate([
    TypeGraphQL.Field(_type => TypeGraphQL.Int, {
        nullable: true
    }),
    __metadata("design:type", Number)
], AggregateSongArgs.prototype, "skip", void 0);
exports.AggregateSongArgs = AggregateSongArgs = __decorate([
    TypeGraphQL.ArgsType()
], AggregateSongArgs);
//# sourceMappingURL=AggregateSongArgs.js.map