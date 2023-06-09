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
exports.FindManyAuthorArgs = void 0;
const TypeGraphQL = require("type-graphql");
const AuthorOrderByWithRelationInput_1 = require("../../../inputs/AuthorOrderByWithRelationInput");
const AuthorWhereInput_1 = require("../../../inputs/AuthorWhereInput");
const AuthorWhereUniqueInput_1 = require("../../../inputs/AuthorWhereUniqueInput");
const AuthorScalarFieldEnum_1 = require("../../../../enums/AuthorScalarFieldEnum");
let FindManyAuthorArgs = exports.FindManyAuthorArgs = class FindManyAuthorArgs {
};
__decorate([
    TypeGraphQL.Field(_type => AuthorWhereInput_1.AuthorWhereInput, {
        nullable: true
    }),
    __metadata("design:type", AuthorWhereInput_1.AuthorWhereInput)
], FindManyAuthorArgs.prototype, "where", void 0);
__decorate([
    TypeGraphQL.Field(_type => [AuthorOrderByWithRelationInput_1.AuthorOrderByWithRelationInput], {
        nullable: true
    }),
    __metadata("design:type", Array)
], FindManyAuthorArgs.prototype, "orderBy", void 0);
__decorate([
    TypeGraphQL.Field(_type => AuthorWhereUniqueInput_1.AuthorWhereUniqueInput, {
        nullable: true
    }),
    __metadata("design:type", AuthorWhereUniqueInput_1.AuthorWhereUniqueInput)
], FindManyAuthorArgs.prototype, "cursor", void 0);
__decorate([
    TypeGraphQL.Field(_type => TypeGraphQL.Int, {
        nullable: true
    }),
    __metadata("design:type", Number)
], FindManyAuthorArgs.prototype, "take", void 0);
__decorate([
    TypeGraphQL.Field(_type => TypeGraphQL.Int, {
        nullable: true
    }),
    __metadata("design:type", Number)
], FindManyAuthorArgs.prototype, "skip", void 0);
__decorate([
    TypeGraphQL.Field(_type => [AuthorScalarFieldEnum_1.AuthorScalarFieldEnum], {
        nullable: true
    }),
    __metadata("design:type", Array)
], FindManyAuthorArgs.prototype, "distinct", void 0);
exports.FindManyAuthorArgs = FindManyAuthorArgs = __decorate([
    TypeGraphQL.ArgsType()
], FindManyAuthorArgs);
//# sourceMappingURL=FindManyAuthorArgs.js.map