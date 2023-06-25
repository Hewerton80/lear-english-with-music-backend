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
exports.SongAuthorUpdateWithWhereUniqueWithoutAuthorInput = void 0;
const TypeGraphQL = require("type-graphql");
const SongAuthorUpdateWithoutAuthorInput_1 = require("../inputs/SongAuthorUpdateWithoutAuthorInput");
const SongAuthorWhereUniqueInput_1 = require("../inputs/SongAuthorWhereUniqueInput");
let SongAuthorUpdateWithWhereUniqueWithoutAuthorInput = exports.SongAuthorUpdateWithWhereUniqueWithoutAuthorInput = class SongAuthorUpdateWithWhereUniqueWithoutAuthorInput {
};
__decorate([
    TypeGraphQL.Field(_type => SongAuthorWhereUniqueInput_1.SongAuthorWhereUniqueInput, {
        nullable: false
    }),
    __metadata("design:type", SongAuthorWhereUniqueInput_1.SongAuthorWhereUniqueInput)
], SongAuthorUpdateWithWhereUniqueWithoutAuthorInput.prototype, "where", void 0);
__decorate([
    TypeGraphQL.Field(_type => SongAuthorUpdateWithoutAuthorInput_1.SongAuthorUpdateWithoutAuthorInput, {
        nullable: false
    }),
    __metadata("design:type", SongAuthorUpdateWithoutAuthorInput_1.SongAuthorUpdateWithoutAuthorInput)
], SongAuthorUpdateWithWhereUniqueWithoutAuthorInput.prototype, "data", void 0);
exports.SongAuthorUpdateWithWhereUniqueWithoutAuthorInput = SongAuthorUpdateWithWhereUniqueWithoutAuthorInput = __decorate([
    TypeGraphQL.InputType("SongAuthorUpdateWithWhereUniqueWithoutAuthorInput", {
        isAbstract: true
    })
], SongAuthorUpdateWithWhereUniqueWithoutAuthorInput);
//# sourceMappingURL=SongAuthorUpdateWithWhereUniqueWithoutAuthorInput.js.map