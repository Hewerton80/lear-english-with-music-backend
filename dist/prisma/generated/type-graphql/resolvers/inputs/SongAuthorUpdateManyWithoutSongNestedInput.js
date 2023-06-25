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
exports.SongAuthorUpdateManyWithoutSongNestedInput = void 0;
const TypeGraphQL = require("type-graphql");
const SongAuthorCreateManySongInputEnvelope_1 = require("../inputs/SongAuthorCreateManySongInputEnvelope");
const SongAuthorCreateOrConnectWithoutSongInput_1 = require("../inputs/SongAuthorCreateOrConnectWithoutSongInput");
const SongAuthorCreateWithoutSongInput_1 = require("../inputs/SongAuthorCreateWithoutSongInput");
const SongAuthorScalarWhereInput_1 = require("../inputs/SongAuthorScalarWhereInput");
const SongAuthorUpdateManyWithWhereWithoutSongInput_1 = require("../inputs/SongAuthorUpdateManyWithWhereWithoutSongInput");
const SongAuthorUpdateWithWhereUniqueWithoutSongInput_1 = require("../inputs/SongAuthorUpdateWithWhereUniqueWithoutSongInput");
const SongAuthorUpsertWithWhereUniqueWithoutSongInput_1 = require("../inputs/SongAuthorUpsertWithWhereUniqueWithoutSongInput");
const SongAuthorWhereUniqueInput_1 = require("../inputs/SongAuthorWhereUniqueInput");
let SongAuthorUpdateManyWithoutSongNestedInput = exports.SongAuthorUpdateManyWithoutSongNestedInput = class SongAuthorUpdateManyWithoutSongNestedInput {
};
__decorate([
    TypeGraphQL.Field(_type => [SongAuthorCreateWithoutSongInput_1.SongAuthorCreateWithoutSongInput], {
        nullable: true
    }),
    __metadata("design:type", Array)
], SongAuthorUpdateManyWithoutSongNestedInput.prototype, "create", void 0);
__decorate([
    TypeGraphQL.Field(_type => [SongAuthorCreateOrConnectWithoutSongInput_1.SongAuthorCreateOrConnectWithoutSongInput], {
        nullable: true
    }),
    __metadata("design:type", Array)
], SongAuthorUpdateManyWithoutSongNestedInput.prototype, "connectOrCreate", void 0);
__decorate([
    TypeGraphQL.Field(_type => [SongAuthorUpsertWithWhereUniqueWithoutSongInput_1.SongAuthorUpsertWithWhereUniqueWithoutSongInput], {
        nullable: true
    }),
    __metadata("design:type", Array)
], SongAuthorUpdateManyWithoutSongNestedInput.prototype, "upsert", void 0);
__decorate([
    TypeGraphQL.Field(_type => SongAuthorCreateManySongInputEnvelope_1.SongAuthorCreateManySongInputEnvelope, {
        nullable: true
    }),
    __metadata("design:type", SongAuthorCreateManySongInputEnvelope_1.SongAuthorCreateManySongInputEnvelope)
], SongAuthorUpdateManyWithoutSongNestedInput.prototype, "createMany", void 0);
__decorate([
    TypeGraphQL.Field(_type => [SongAuthorWhereUniqueInput_1.SongAuthorWhereUniqueInput], {
        nullable: true
    }),
    __metadata("design:type", Array)
], SongAuthorUpdateManyWithoutSongNestedInput.prototype, "set", void 0);
__decorate([
    TypeGraphQL.Field(_type => [SongAuthorWhereUniqueInput_1.SongAuthorWhereUniqueInput], {
        nullable: true
    }),
    __metadata("design:type", Array)
], SongAuthorUpdateManyWithoutSongNestedInput.prototype, "disconnect", void 0);
__decorate([
    TypeGraphQL.Field(_type => [SongAuthorWhereUniqueInput_1.SongAuthorWhereUniqueInput], {
        nullable: true
    }),
    __metadata("design:type", Array)
], SongAuthorUpdateManyWithoutSongNestedInput.prototype, "delete", void 0);
__decorate([
    TypeGraphQL.Field(_type => [SongAuthorWhereUniqueInput_1.SongAuthorWhereUniqueInput], {
        nullable: true
    }),
    __metadata("design:type", Array)
], SongAuthorUpdateManyWithoutSongNestedInput.prototype, "connect", void 0);
__decorate([
    TypeGraphQL.Field(_type => [SongAuthorUpdateWithWhereUniqueWithoutSongInput_1.SongAuthorUpdateWithWhereUniqueWithoutSongInput], {
        nullable: true
    }),
    __metadata("design:type", Array)
], SongAuthorUpdateManyWithoutSongNestedInput.prototype, "update", void 0);
__decorate([
    TypeGraphQL.Field(_type => [SongAuthorUpdateManyWithWhereWithoutSongInput_1.SongAuthorUpdateManyWithWhereWithoutSongInput], {
        nullable: true
    }),
    __metadata("design:type", Array)
], SongAuthorUpdateManyWithoutSongNestedInput.prototype, "updateMany", void 0);
__decorate([
    TypeGraphQL.Field(_type => [SongAuthorScalarWhereInput_1.SongAuthorScalarWhereInput], {
        nullable: true
    }),
    __metadata("design:type", Array)
], SongAuthorUpdateManyWithoutSongNestedInput.prototype, "deleteMany", void 0);
exports.SongAuthorUpdateManyWithoutSongNestedInput = SongAuthorUpdateManyWithoutSongNestedInput = __decorate([
    TypeGraphQL.InputType("SongAuthorUpdateManyWithoutSongNestedInput", {
        isAbstract: true
    })
], SongAuthorUpdateManyWithoutSongNestedInput);
//# sourceMappingURL=SongAuthorUpdateManyWithoutSongNestedInput.js.map