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
exports.SongUpsertWithoutAuthorsInput = void 0;
const TypeGraphQL = require("type-graphql");
const SongCreateWithoutAuthorsInput_1 = require("../inputs/SongCreateWithoutAuthorsInput");
const SongUpdateWithoutAuthorsInput_1 = require("../inputs/SongUpdateWithoutAuthorsInput");
let SongUpsertWithoutAuthorsInput = exports.SongUpsertWithoutAuthorsInput = class SongUpsertWithoutAuthorsInput {
};
__decorate([
    TypeGraphQL.Field(_type => SongUpdateWithoutAuthorsInput_1.SongUpdateWithoutAuthorsInput, {
        nullable: false
    }),
    __metadata("design:type", SongUpdateWithoutAuthorsInput_1.SongUpdateWithoutAuthorsInput)
], SongUpsertWithoutAuthorsInput.prototype, "update", void 0);
__decorate([
    TypeGraphQL.Field(_type => SongCreateWithoutAuthorsInput_1.SongCreateWithoutAuthorsInput, {
        nullable: false
    }),
    __metadata("design:type", SongCreateWithoutAuthorsInput_1.SongCreateWithoutAuthorsInput)
], SongUpsertWithoutAuthorsInput.prototype, "create", void 0);
exports.SongUpsertWithoutAuthorsInput = SongUpsertWithoutAuthorsInput = __decorate([
    TypeGraphQL.InputType("SongUpsertWithoutAuthorsInput", {
        isAbstract: true
    })
], SongUpsertWithoutAuthorsInput);
//# sourceMappingURL=SongUpsertWithoutAuthorsInput.js.map