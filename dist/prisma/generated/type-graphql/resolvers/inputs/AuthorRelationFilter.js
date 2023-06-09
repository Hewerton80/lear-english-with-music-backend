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
exports.AuthorRelationFilter = void 0;
const TypeGraphQL = require("type-graphql");
const AuthorWhereInput_1 = require("../inputs/AuthorWhereInput");
let AuthorRelationFilter = exports.AuthorRelationFilter = class AuthorRelationFilter {
};
__decorate([
    TypeGraphQL.Field(_type => AuthorWhereInput_1.AuthorWhereInput, {
        nullable: true
    }),
    __metadata("design:type", AuthorWhereInput_1.AuthorWhereInput)
], AuthorRelationFilter.prototype, "is", void 0);
__decorate([
    TypeGraphQL.Field(_type => AuthorWhereInput_1.AuthorWhereInput, {
        nullable: true
    }),
    __metadata("design:type", AuthorWhereInput_1.AuthorWhereInput)
], AuthorRelationFilter.prototype, "isNot", void 0);
exports.AuthorRelationFilter = AuthorRelationFilter = __decorate([
    TypeGraphQL.InputType("AuthorRelationFilter", {
        isAbstract: true
    })
], AuthorRelationFilter);
//# sourceMappingURL=AuthorRelationFilter.js.map