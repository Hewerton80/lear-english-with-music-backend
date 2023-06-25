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
exports.SongAuthorUpdateManyWithWhereWithoutAuthorInput = void 0;
const TypeGraphQL = require("type-graphql");
const SongAuthorScalarWhereInput_1 = require("../inputs/SongAuthorScalarWhereInput");
const SongAuthorUpdateManyMutationInput_1 = require("../inputs/SongAuthorUpdateManyMutationInput");
let SongAuthorUpdateManyWithWhereWithoutAuthorInput = exports.SongAuthorUpdateManyWithWhereWithoutAuthorInput = class SongAuthorUpdateManyWithWhereWithoutAuthorInput {
};
__decorate([
    TypeGraphQL.Field(_type => SongAuthorScalarWhereInput_1.SongAuthorScalarWhereInput, {
        nullable: false
    }),
    __metadata("design:type", SongAuthorScalarWhereInput_1.SongAuthorScalarWhereInput)
], SongAuthorUpdateManyWithWhereWithoutAuthorInput.prototype, "where", void 0);
__decorate([
    TypeGraphQL.Field(_type => SongAuthorUpdateManyMutationInput_1.SongAuthorUpdateManyMutationInput, {
        nullable: false
    }),
    __metadata("design:type", SongAuthorUpdateManyMutationInput_1.SongAuthorUpdateManyMutationInput)
], SongAuthorUpdateManyWithWhereWithoutAuthorInput.prototype, "data", void 0);
exports.SongAuthorUpdateManyWithWhereWithoutAuthorInput = SongAuthorUpdateManyWithWhereWithoutAuthorInput = __decorate([
    TypeGraphQL.InputType("SongAuthorUpdateManyWithWhereWithoutAuthorInput", {
        isAbstract: true
    })
], SongAuthorUpdateManyWithWhereWithoutAuthorInput);
//# sourceMappingURL=SongAuthorUpdateManyWithWhereWithoutAuthorInput.js.map