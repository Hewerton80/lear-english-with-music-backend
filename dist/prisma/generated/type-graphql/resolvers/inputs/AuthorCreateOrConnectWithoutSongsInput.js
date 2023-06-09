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
exports.AuthorCreateOrConnectWithoutSongsInput = void 0;
const TypeGraphQL = require("type-graphql");
const AuthorCreateWithoutSongsInput_1 = require("../inputs/AuthorCreateWithoutSongsInput");
const AuthorWhereUniqueInput_1 = require("../inputs/AuthorWhereUniqueInput");
let AuthorCreateOrConnectWithoutSongsInput = exports.AuthorCreateOrConnectWithoutSongsInput = class AuthorCreateOrConnectWithoutSongsInput {
};
__decorate([
    TypeGraphQL.Field(_type => AuthorWhereUniqueInput_1.AuthorWhereUniqueInput, {
        nullable: false
    }),
    __metadata("design:type", AuthorWhereUniqueInput_1.AuthorWhereUniqueInput)
], AuthorCreateOrConnectWithoutSongsInput.prototype, "where", void 0);
__decorate([
    TypeGraphQL.Field(_type => AuthorCreateWithoutSongsInput_1.AuthorCreateWithoutSongsInput, {
        nullable: false
    }),
    __metadata("design:type", AuthorCreateWithoutSongsInput_1.AuthorCreateWithoutSongsInput)
], AuthorCreateOrConnectWithoutSongsInput.prototype, "create", void 0);
exports.AuthorCreateOrConnectWithoutSongsInput = AuthorCreateOrConnectWithoutSongsInput = __decorate([
    TypeGraphQL.InputType("AuthorCreateOrConnectWithoutSongsInput", {
        isAbstract: true
    })
], AuthorCreateOrConnectWithoutSongsInput);
//# sourceMappingURL=AuthorCreateOrConnectWithoutSongsInput.js.map