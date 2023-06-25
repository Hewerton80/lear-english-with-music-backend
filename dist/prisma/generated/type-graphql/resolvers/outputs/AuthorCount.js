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
exports.AuthorCount = void 0;
const TypeGraphQL = require("type-graphql");
const AuthorCountSongsArgs_1 = require("./args/AuthorCountSongsArgs");
let AuthorCount = exports.AuthorCount = class AuthorCount {
    getSongs(root, args) {
        return root.songs;
    }
};
__decorate([
    TypeGraphQL.Field(_type => TypeGraphQL.Int, {
        name: "songs",
        nullable: false
    }),
    __param(0, TypeGraphQL.Root()),
    __param(1, TypeGraphQL.Args()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [AuthorCount, AuthorCountSongsArgs_1.AuthorCountSongsArgs]),
    __metadata("design:returntype", Number)
], AuthorCount.prototype, "getSongs", null);
exports.AuthorCount = AuthorCount = __decorate([
    TypeGraphQL.ObjectType("AuthorCount", {
        isAbstract: true
    })
], AuthorCount);
//# sourceMappingURL=AuthorCount.js.map