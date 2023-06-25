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
exports.SongAuthorWhereUniqueInput = void 0;
const TypeGraphQL = require("type-graphql");
const SongAuthorSongIdAuthorIdCompoundUniqueInput_1 = require("../inputs/SongAuthorSongIdAuthorIdCompoundUniqueInput");
let SongAuthorWhereUniqueInput = exports.SongAuthorWhereUniqueInput = class SongAuthorWhereUniqueInput {
};
__decorate([
    TypeGraphQL.Field(_type => SongAuthorSongIdAuthorIdCompoundUniqueInput_1.SongAuthorSongIdAuthorIdCompoundUniqueInput, {
        nullable: true
    }),
    __metadata("design:type", SongAuthorSongIdAuthorIdCompoundUniqueInput_1.SongAuthorSongIdAuthorIdCompoundUniqueInput)
], SongAuthorWhereUniqueInput.prototype, "songId_authorId", void 0);
exports.SongAuthorWhereUniqueInput = SongAuthorWhereUniqueInput = __decorate([
    TypeGraphQL.InputType("SongAuthorWhereUniqueInput", {
        isAbstract: true
    })
], SongAuthorWhereUniqueInput);
//# sourceMappingURL=SongAuthorWhereUniqueInput.js.map