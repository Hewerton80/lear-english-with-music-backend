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
exports.AuthorUpdateOneRequiredWithoutSongsNestedInput = void 0;
const TypeGraphQL = require("type-graphql");
const AuthorCreateOrConnectWithoutSongsInput_1 = require("../inputs/AuthorCreateOrConnectWithoutSongsInput");
const AuthorCreateWithoutSongsInput_1 = require("../inputs/AuthorCreateWithoutSongsInput");
const AuthorUpdateWithoutSongsInput_1 = require("../inputs/AuthorUpdateWithoutSongsInput");
const AuthorUpsertWithoutSongsInput_1 = require("../inputs/AuthorUpsertWithoutSongsInput");
const AuthorWhereUniqueInput_1 = require("../inputs/AuthorWhereUniqueInput");
let AuthorUpdateOneRequiredWithoutSongsNestedInput = exports.AuthorUpdateOneRequiredWithoutSongsNestedInput = class AuthorUpdateOneRequiredWithoutSongsNestedInput {
};
__decorate([
    TypeGraphQL.Field(_type => AuthorCreateWithoutSongsInput_1.AuthorCreateWithoutSongsInput, {
        nullable: true
    }),
    __metadata("design:type", AuthorCreateWithoutSongsInput_1.AuthorCreateWithoutSongsInput)
], AuthorUpdateOneRequiredWithoutSongsNestedInput.prototype, "create", void 0);
__decorate([
    TypeGraphQL.Field(_type => AuthorCreateOrConnectWithoutSongsInput_1.AuthorCreateOrConnectWithoutSongsInput, {
        nullable: true
    }),
    __metadata("design:type", AuthorCreateOrConnectWithoutSongsInput_1.AuthorCreateOrConnectWithoutSongsInput)
], AuthorUpdateOneRequiredWithoutSongsNestedInput.prototype, "connectOrCreate", void 0);
__decorate([
    TypeGraphQL.Field(_type => AuthorUpsertWithoutSongsInput_1.AuthorUpsertWithoutSongsInput, {
        nullable: true
    }),
    __metadata("design:type", AuthorUpsertWithoutSongsInput_1.AuthorUpsertWithoutSongsInput)
], AuthorUpdateOneRequiredWithoutSongsNestedInput.prototype, "upsert", void 0);
__decorate([
    TypeGraphQL.Field(_type => AuthorWhereUniqueInput_1.AuthorWhereUniqueInput, {
        nullable: true
    }),
    __metadata("design:type", AuthorWhereUniqueInput_1.AuthorWhereUniqueInput)
], AuthorUpdateOneRequiredWithoutSongsNestedInput.prototype, "connect", void 0);
__decorate([
    TypeGraphQL.Field(_type => AuthorUpdateWithoutSongsInput_1.AuthorUpdateWithoutSongsInput, {
        nullable: true
    }),
    __metadata("design:type", AuthorUpdateWithoutSongsInput_1.AuthorUpdateWithoutSongsInput)
], AuthorUpdateOneRequiredWithoutSongsNestedInput.prototype, "update", void 0);
exports.AuthorUpdateOneRequiredWithoutSongsNestedInput = AuthorUpdateOneRequiredWithoutSongsNestedInput = __decorate([
    TypeGraphQL.InputType("AuthorUpdateOneRequiredWithoutSongsNestedInput", {
        isAbstract: true
    })
], AuthorUpdateOneRequiredWithoutSongsNestedInput);
//# sourceMappingURL=AuthorUpdateOneRequiredWithoutSongsNestedInput.js.map