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
exports.AuthorUpdateWithoutSongsInput = void 0;
const TypeGraphQL = require("type-graphql");
let AuthorUpdateWithoutSongsInput = exports.AuthorUpdateWithoutSongsInput = class AuthorUpdateWithoutSongsInput {
};
__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: true
    }),
    __metadata("design:type", String)
], AuthorUpdateWithoutSongsInput.prototype, "id", void 0);
__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: true
    }),
    __metadata("design:type", String)
], AuthorUpdateWithoutSongsInput.prototype, "name", void 0);
__decorate([
    TypeGraphQL.Field(_type => Date, {
        nullable: true
    }),
    __metadata("design:type", Date)
], AuthorUpdateWithoutSongsInput.prototype, "createdAt", void 0);
exports.AuthorUpdateWithoutSongsInput = AuthorUpdateWithoutSongsInput = __decorate([
    TypeGraphQL.InputType("AuthorUpdateWithoutSongsInput", {
        isAbstract: true
    })
], AuthorUpdateWithoutSongsInput);
//# sourceMappingURL=AuthorUpdateWithoutSongsInput.js.map