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
exports.SongAuthorCreateNestedManyWithoutAuthorInput = void 0;
const TypeGraphQL = require("type-graphql");
const SongAuthorCreateManyAuthorInputEnvelope_1 = require("../inputs/SongAuthorCreateManyAuthorInputEnvelope");
const SongAuthorCreateOrConnectWithoutAuthorInput_1 = require("../inputs/SongAuthorCreateOrConnectWithoutAuthorInput");
const SongAuthorCreateWithoutAuthorInput_1 = require("../inputs/SongAuthorCreateWithoutAuthorInput");
const SongAuthorWhereUniqueInput_1 = require("../inputs/SongAuthorWhereUniqueInput");
let SongAuthorCreateNestedManyWithoutAuthorInput = exports.SongAuthorCreateNestedManyWithoutAuthorInput = class SongAuthorCreateNestedManyWithoutAuthorInput {
};
__decorate([
    TypeGraphQL.Field(_type => [SongAuthorCreateWithoutAuthorInput_1.SongAuthorCreateWithoutAuthorInput], {
        nullable: true
    }),
    __metadata("design:type", Array)
], SongAuthorCreateNestedManyWithoutAuthorInput.prototype, "create", void 0);
__decorate([
    TypeGraphQL.Field(_type => [SongAuthorCreateOrConnectWithoutAuthorInput_1.SongAuthorCreateOrConnectWithoutAuthorInput], {
        nullable: true
    }),
    __metadata("design:type", Array)
], SongAuthorCreateNestedManyWithoutAuthorInput.prototype, "connectOrCreate", void 0);
__decorate([
    TypeGraphQL.Field(_type => SongAuthorCreateManyAuthorInputEnvelope_1.SongAuthorCreateManyAuthorInputEnvelope, {
        nullable: true
    }),
    __metadata("design:type", SongAuthorCreateManyAuthorInputEnvelope_1.SongAuthorCreateManyAuthorInputEnvelope)
], SongAuthorCreateNestedManyWithoutAuthorInput.prototype, "createMany", void 0);
__decorate([
    TypeGraphQL.Field(_type => [SongAuthorWhereUniqueInput_1.SongAuthorWhereUniqueInput], {
        nullable: true
    }),
    __metadata("design:type", Array)
], SongAuthorCreateNestedManyWithoutAuthorInput.prototype, "connect", void 0);
exports.SongAuthorCreateNestedManyWithoutAuthorInput = SongAuthorCreateNestedManyWithoutAuthorInput = __decorate([
    TypeGraphQL.InputType("SongAuthorCreateNestedManyWithoutAuthorInput", {
        isAbstract: true
    })
], SongAuthorCreateNestedManyWithoutAuthorInput);
//# sourceMappingURL=SongAuthorCreateNestedManyWithoutAuthorInput.js.map