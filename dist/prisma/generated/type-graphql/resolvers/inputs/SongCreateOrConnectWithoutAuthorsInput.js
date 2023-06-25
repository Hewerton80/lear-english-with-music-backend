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
exports.SongCreateOrConnectWithoutAuthorsInput = void 0;
const TypeGraphQL = require("type-graphql");
const SongCreateWithoutAuthorsInput_1 = require("../inputs/SongCreateWithoutAuthorsInput");
const SongWhereUniqueInput_1 = require("../inputs/SongWhereUniqueInput");
let SongCreateOrConnectWithoutAuthorsInput = exports.SongCreateOrConnectWithoutAuthorsInput = class SongCreateOrConnectWithoutAuthorsInput {
};
__decorate([
    TypeGraphQL.Field(_type => SongWhereUniqueInput_1.SongWhereUniqueInput, {
        nullable: false
    }),
    __metadata("design:type", SongWhereUniqueInput_1.SongWhereUniqueInput)
], SongCreateOrConnectWithoutAuthorsInput.prototype, "where", void 0);
__decorate([
    TypeGraphQL.Field(_type => SongCreateWithoutAuthorsInput_1.SongCreateWithoutAuthorsInput, {
        nullable: false
    }),
    __metadata("design:type", SongCreateWithoutAuthorsInput_1.SongCreateWithoutAuthorsInput)
], SongCreateOrConnectWithoutAuthorsInput.prototype, "create", void 0);
exports.SongCreateOrConnectWithoutAuthorsInput = SongCreateOrConnectWithoutAuthorsInput = __decorate([
    TypeGraphQL.InputType("SongCreateOrConnectWithoutAuthorsInput", {
        isAbstract: true
    })
], SongCreateOrConnectWithoutAuthorsInput);
//# sourceMappingURL=SongCreateOrConnectWithoutAuthorsInput.js.map