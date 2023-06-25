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
exports.GroupBySongResolver = void 0;
const TypeGraphQL = require("type-graphql");
const GroupBySongArgs_1 = require("./args/GroupBySongArgs");
const Song_1 = require("../../../models/Song");
const SongGroupBy_1 = require("../../outputs/SongGroupBy");
const helpers_1 = require("../../../helpers");
let GroupBySongResolver = exports.GroupBySongResolver = class GroupBySongResolver {
    async groupBySong(ctx, info, args) {
        const { _count, _avg, _sum, _min, _max } = (0, helpers_1.transformInfoIntoPrismaArgs)(info);
        return (0, helpers_1.getPrismaFromContext)(ctx).song.groupBy({
            ...args,
            ...Object.fromEntries(Object.entries({ _count, _avg, _sum, _min, _max }).filter(([_, v]) => v != null)),
        });
    }
};
__decorate([
    TypeGraphQL.Query(_returns => [SongGroupBy_1.SongGroupBy], {
        nullable: false
    }),
    __param(0, TypeGraphQL.Ctx()),
    __param(1, TypeGraphQL.Info()),
    __param(2, TypeGraphQL.Args()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, Object, GroupBySongArgs_1.GroupBySongArgs]),
    __metadata("design:returntype", Promise)
], GroupBySongResolver.prototype, "groupBySong", null);
exports.GroupBySongResolver = GroupBySongResolver = __decorate([
    TypeGraphQL.Resolver(_of => Song_1.Song)
], GroupBySongResolver);
//# sourceMappingURL=GroupBySongResolver.js.map