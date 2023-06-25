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
exports.SongCreateNestedOneWithoutAuthorsInput = void 0;
const TypeGraphQL = require("type-graphql");
const SongCreateOrConnectWithoutAuthorsInput_1 = require("../inputs/SongCreateOrConnectWithoutAuthorsInput");
const SongCreateWithoutAuthorsInput_1 = require("../inputs/SongCreateWithoutAuthorsInput");
const SongWhereUniqueInput_1 = require("../inputs/SongWhereUniqueInput");
let SongCreateNestedOneWithoutAuthorsInput = exports.SongCreateNestedOneWithoutAuthorsInput = class SongCreateNestedOneWithoutAuthorsInput {
};
__decorate([
    TypeGraphQL.Field(_type => SongCreateWithoutAuthorsInput_1.SongCreateWithoutAuthorsInput, {
        nullable: true
    }),
    __metadata("design:type", SongCreateWithoutAuthorsInput_1.SongCreateWithoutAuthorsInput)
], SongCreateNestedOneWithoutAuthorsInput.prototype, "create", void 0);
__decorate([
    TypeGraphQL.Field(_type => SongCreateOrConnectWithoutAuthorsInput_1.SongCreateOrConnectWithoutAuthorsInput, {
        nullable: true
    }),
    __metadata("design:type", SongCreateOrConnectWithoutAuthorsInput_1.SongCreateOrConnectWithoutAuthorsInput)
], SongCreateNestedOneWithoutAuthorsInput.prototype, "connectOrCreate", void 0);
__decorate([
    TypeGraphQL.Field(_type => SongWhereUniqueInput_1.SongWhereUniqueInput, {
        nullable: true
    }),
    __metadata("design:type", SongWhereUniqueInput_1.SongWhereUniqueInput)
], SongCreateNestedOneWithoutAuthorsInput.prototype, "connect", void 0);
exports.SongCreateNestedOneWithoutAuthorsInput = SongCreateNestedOneWithoutAuthorsInput = __decorate([
    TypeGraphQL.InputType("SongCreateNestedOneWithoutAuthorsInput", {
        isAbstract: true
    })
], SongCreateNestedOneWithoutAuthorsInput);
//# sourceMappingURL=SongCreateNestedOneWithoutAuthorsInput.js.map