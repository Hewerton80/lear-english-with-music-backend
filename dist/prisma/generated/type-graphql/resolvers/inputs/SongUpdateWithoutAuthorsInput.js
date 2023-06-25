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
exports.SongUpdateWithoutAuthorsInput = void 0;
const TypeGraphQL = require("type-graphql");
let SongUpdateWithoutAuthorsInput = exports.SongUpdateWithoutAuthorsInput = class SongUpdateWithoutAuthorsInput {
};
__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: true
    }),
    __metadata("design:type", String)
], SongUpdateWithoutAuthorsInput.prototype, "id", void 0);
__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: true
    }),
    __metadata("design:type", String)
], SongUpdateWithoutAuthorsInput.prototype, "title", void 0);
__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: true
    }),
    __metadata("design:type", String)
], SongUpdateWithoutAuthorsInput.prototype, "url", void 0);
__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: true
    }),
    __metadata("design:type", String)
], SongUpdateWithoutAuthorsInput.prototype, "lyric", void 0);
__decorate([
    TypeGraphQL.Field(_type => Date, {
        nullable: true
    }),
    __metadata("design:type", Date)
], SongUpdateWithoutAuthorsInput.prototype, "createdAt", void 0);
exports.SongUpdateWithoutAuthorsInput = SongUpdateWithoutAuthorsInput = __decorate([
    TypeGraphQL.InputType("SongUpdateWithoutAuthorsInput", {
        isAbstract: true
    })
], SongUpdateWithoutAuthorsInput);
//# sourceMappingURL=SongUpdateWithoutAuthorsInput.js.map