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
exports.AuthorUpsertWithoutSongsInput = void 0;
const TypeGraphQL = require("type-graphql");
const AuthorCreateWithoutSongsInput_1 = require("../inputs/AuthorCreateWithoutSongsInput");
const AuthorUpdateWithoutSongsInput_1 = require("../inputs/AuthorUpdateWithoutSongsInput");
let AuthorUpsertWithoutSongsInput = exports.AuthorUpsertWithoutSongsInput = class AuthorUpsertWithoutSongsInput {
};
__decorate([
    TypeGraphQL.Field(_type => AuthorUpdateWithoutSongsInput_1.AuthorUpdateWithoutSongsInput, {
        nullable: false
    }),
    __metadata("design:type", AuthorUpdateWithoutSongsInput_1.AuthorUpdateWithoutSongsInput)
], AuthorUpsertWithoutSongsInput.prototype, "update", void 0);
__decorate([
    TypeGraphQL.Field(_type => AuthorCreateWithoutSongsInput_1.AuthorCreateWithoutSongsInput, {
        nullable: false
    }),
    __metadata("design:type", AuthorCreateWithoutSongsInput_1.AuthorCreateWithoutSongsInput)
], AuthorUpsertWithoutSongsInput.prototype, "create", void 0);
exports.AuthorUpsertWithoutSongsInput = AuthorUpsertWithoutSongsInput = __decorate([
    TypeGraphQL.InputType("AuthorUpsertWithoutSongsInput", {
        isAbstract: true
    })
], AuthorUpsertWithoutSongsInput);
//# sourceMappingURL=AuthorUpsertWithoutSongsInput.js.map