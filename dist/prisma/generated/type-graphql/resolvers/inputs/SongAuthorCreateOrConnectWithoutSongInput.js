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
exports.SongAuthorCreateOrConnectWithoutSongInput = void 0;
const TypeGraphQL = require("type-graphql");
const SongAuthorCreateWithoutSongInput_1 = require("../inputs/SongAuthorCreateWithoutSongInput");
const SongAuthorWhereUniqueInput_1 = require("../inputs/SongAuthorWhereUniqueInput");
let SongAuthorCreateOrConnectWithoutSongInput = exports.SongAuthorCreateOrConnectWithoutSongInput = class SongAuthorCreateOrConnectWithoutSongInput {
};
__decorate([
    TypeGraphQL.Field(_type => SongAuthorWhereUniqueInput_1.SongAuthorWhereUniqueInput, {
        nullable: false
    }),
    __metadata("design:type", SongAuthorWhereUniqueInput_1.SongAuthorWhereUniqueInput)
], SongAuthorCreateOrConnectWithoutSongInput.prototype, "where", void 0);
__decorate([
    TypeGraphQL.Field(_type => SongAuthorCreateWithoutSongInput_1.SongAuthorCreateWithoutSongInput, {
        nullable: false
    }),
    __metadata("design:type", SongAuthorCreateWithoutSongInput_1.SongAuthorCreateWithoutSongInput)
], SongAuthorCreateOrConnectWithoutSongInput.prototype, "create", void 0);
exports.SongAuthorCreateOrConnectWithoutSongInput = SongAuthorCreateOrConnectWithoutSongInput = __decorate([
    TypeGraphQL.InputType("SongAuthorCreateOrConnectWithoutSongInput", {
        isAbstract: true
    })
], SongAuthorCreateOrConnectWithoutSongInput);
//# sourceMappingURL=SongAuthorCreateOrConnectWithoutSongInput.js.map