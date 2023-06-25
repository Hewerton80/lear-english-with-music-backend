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
exports.SongUpdateInput = void 0;
const TypeGraphQL = require("type-graphql");
const SongAuthorUpdateManyWithoutSongNestedInput_1 = require("../inputs/SongAuthorUpdateManyWithoutSongNestedInput");
let SongUpdateInput = exports.SongUpdateInput = class SongUpdateInput {
};
__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: true
    }),
    __metadata("design:type", String)
], SongUpdateInput.prototype, "id", void 0);
__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: true
    }),
    __metadata("design:type", String)
], SongUpdateInput.prototype, "title", void 0);
__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: true
    }),
    __metadata("design:type", String)
], SongUpdateInput.prototype, "url", void 0);
__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: true
    }),
    __metadata("design:type", String)
], SongUpdateInput.prototype, "lyric", void 0);
__decorate([
    TypeGraphQL.Field(_type => Date, {
        nullable: true
    }),
    __metadata("design:type", Date)
], SongUpdateInput.prototype, "createdAt", void 0);
__decorate([
    TypeGraphQL.Field(_type => SongAuthorUpdateManyWithoutSongNestedInput_1.SongAuthorUpdateManyWithoutSongNestedInput, {
        nullable: true
    }),
    __metadata("design:type", SongAuthorUpdateManyWithoutSongNestedInput_1.SongAuthorUpdateManyWithoutSongNestedInput)
], SongUpdateInput.prototype, "authors", void 0);
exports.SongUpdateInput = SongUpdateInput = __decorate([
    TypeGraphQL.InputType("SongUpdateInput", {
        isAbstract: true
    })
], SongUpdateInput);
//# sourceMappingURL=SongUpdateInput.js.map