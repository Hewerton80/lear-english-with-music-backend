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
exports.SongAuthorUpdateInput = void 0;
const TypeGraphQL = require("type-graphql");
const AuthorUpdateOneRequiredWithoutSongsNestedInput_1 = require("../inputs/AuthorUpdateOneRequiredWithoutSongsNestedInput");
const SongUpdateOneRequiredWithoutAuthorsNestedInput_1 = require("../inputs/SongUpdateOneRequiredWithoutAuthorsNestedInput");
let SongAuthorUpdateInput = exports.SongAuthorUpdateInput = class SongAuthorUpdateInput {
};
__decorate([
    TypeGraphQL.Field(_type => Date, {
        nullable: true
    }),
    __metadata("design:type", Date)
], SongAuthorUpdateInput.prototype, "createdAt", void 0);
__decorate([
    TypeGraphQL.Field(_type => AuthorUpdateOneRequiredWithoutSongsNestedInput_1.AuthorUpdateOneRequiredWithoutSongsNestedInput, {
        nullable: true
    }),
    __metadata("design:type", AuthorUpdateOneRequiredWithoutSongsNestedInput_1.AuthorUpdateOneRequiredWithoutSongsNestedInput)
], SongAuthorUpdateInput.prototype, "author", void 0);
__decorate([
    TypeGraphQL.Field(_type => SongUpdateOneRequiredWithoutAuthorsNestedInput_1.SongUpdateOneRequiredWithoutAuthorsNestedInput, {
        nullable: true
    }),
    __metadata("design:type", SongUpdateOneRequiredWithoutAuthorsNestedInput_1.SongUpdateOneRequiredWithoutAuthorsNestedInput)
], SongAuthorUpdateInput.prototype, "song", void 0);
exports.SongAuthorUpdateInput = SongAuthorUpdateInput = __decorate([
    TypeGraphQL.InputType("SongAuthorUpdateInput", {
        isAbstract: true
    })
], SongAuthorUpdateInput);
//# sourceMappingURL=SongAuthorUpdateInput.js.map