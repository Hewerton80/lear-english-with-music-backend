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
exports.SongCount = void 0;
const TypeGraphQL = require("type-graphql");
const SongCountAuthorsArgs_1 = require("./args/SongCountAuthorsArgs");
let SongCount = exports.SongCount = class SongCount {
    getAuthors(root, args) {
        return root.authors;
    }
};
__decorate([
    TypeGraphQL.Field(_type => TypeGraphQL.Int, {
        name: "authors",
        nullable: false
    }),
    __param(0, TypeGraphQL.Root()),
    __param(1, TypeGraphQL.Args()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [SongCount, SongCountAuthorsArgs_1.SongCountAuthorsArgs]),
    __metadata("design:returntype", Number)
], SongCount.prototype, "getAuthors", null);
exports.SongCount = SongCount = __decorate([
    TypeGraphQL.ObjectType("SongCount", {
        isAbstract: true
    })
], SongCount);
//# sourceMappingURL=SongCount.js.map