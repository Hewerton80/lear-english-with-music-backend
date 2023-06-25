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
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.AggregateSongResolver = void 0;
const TypeGraphQL = require("type-graphql");
const AggregateSongArgs_1 = require("./args/AggregateSongArgs");
const Song_1 = require("../../../models/Song");
const AggregateSong_1 = require("../../outputs/AggregateSong");
const helpers_1 = require("../../../helpers");
let AggregateSongResolver = exports.AggregateSongResolver = class AggregateSongResolver {
    async aggregateSong(ctx, info, args) {
        return (0, helpers_1.getPrismaFromContext)(ctx).song.aggregate({
            ...args,
            ...(0, helpers_1.transformInfoIntoPrismaArgs)(info),
        });
    }
};
__decorate([
    TypeGraphQL.Query(_returns => AggregateSong_1.AggregateSong, {
        nullable: false
    }),
    __param(0, TypeGraphQL.Ctx()),
    __param(1, TypeGraphQL.Info()),
    __param(2, TypeGraphQL.Args()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, Object, AggregateSongArgs_1.AggregateSongArgs]),
    __metadata("design:returntype", Promise)
], AggregateSongResolver.prototype, "aggregateSong", null);
exports.AggregateSongResolver = AggregateSongResolver = __decorate([
    TypeGraphQL.Resolver(_of => Song_1.Song)
], AggregateSongResolver);
//# sourceMappingURL=AggregateSongResolver.js.map