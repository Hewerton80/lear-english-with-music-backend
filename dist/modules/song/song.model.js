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
exports.PaginedSong = void 0;
const pagination_resolver_1 = require("../../common/resolvers/pagination.resolver");
const type_graphql_1 = require("../../prisma/generated/type-graphql");
const type_graphql_2 = require("type-graphql");
let PaginedSong = exports.PaginedSong = class PaginedSong extends pagination_resolver_1.Pagination {
};
__decorate([
    (0, type_graphql_2.Field)(() => [type_graphql_1.Song], { nullable: false }),
    __metadata("design:type", Array)
], PaginedSong.prototype, "docs", void 0);
exports.PaginedSong = PaginedSong = __decorate([
    (0, type_graphql_2.ObjectType)()
], PaginedSong);
//# sourceMappingURL=song.model.js.map