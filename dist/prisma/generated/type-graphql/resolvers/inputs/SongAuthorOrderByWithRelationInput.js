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
exports.SongAuthorOrderByWithRelationInput = void 0;
const TypeGraphQL = require("type-graphql");
const AuthorOrderByWithRelationInput_1 = require("../inputs/AuthorOrderByWithRelationInput");
const SongOrderByWithRelationInput_1 = require("../inputs/SongOrderByWithRelationInput");
const SortOrder_1 = require("../../enums/SortOrder");
let SongAuthorOrderByWithRelationInput = exports.SongAuthorOrderByWithRelationInput = class SongAuthorOrderByWithRelationInput {
};
__decorate([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    __metadata("design:type", String)
], SongAuthorOrderByWithRelationInput.prototype, "authorId", void 0);
__decorate([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    __metadata("design:type", String)
], SongAuthorOrderByWithRelationInput.prototype, "songId", void 0);
__decorate([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    __metadata("design:type", String)
], SongAuthorOrderByWithRelationInput.prototype, "createdAt", void 0);
__decorate([
    TypeGraphQL.Field(_type => AuthorOrderByWithRelationInput_1.AuthorOrderByWithRelationInput, {
        nullable: true
    }),
    __metadata("design:type", AuthorOrderByWithRelationInput_1.AuthorOrderByWithRelationInput)
], SongAuthorOrderByWithRelationInput.prototype, "author", void 0);
__decorate([
    TypeGraphQL.Field(_type => SongOrderByWithRelationInput_1.SongOrderByWithRelationInput, {
        nullable: true
    }),
    __metadata("design:type", SongOrderByWithRelationInput_1.SongOrderByWithRelationInput)
], SongAuthorOrderByWithRelationInput.prototype, "song", void 0);
exports.SongAuthorOrderByWithRelationInput = SongAuthorOrderByWithRelationInput = __decorate([
    TypeGraphQL.InputType("SongAuthorOrderByWithRelationInput", {
        isAbstract: true
    })
], SongAuthorOrderByWithRelationInput);
//# sourceMappingURL=SongAuthorOrderByWithRelationInput.js.map