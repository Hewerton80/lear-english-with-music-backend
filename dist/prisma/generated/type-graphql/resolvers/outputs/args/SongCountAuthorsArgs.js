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
exports.SongCountAuthorsArgs = void 0;
const TypeGraphQL = require("type-graphql");
const SongAuthorWhereInput_1 = require("../../inputs/SongAuthorWhereInput");
let SongCountAuthorsArgs = exports.SongCountAuthorsArgs = class SongCountAuthorsArgs {
};
__decorate([
    TypeGraphQL.Field(_type => SongAuthorWhereInput_1.SongAuthorWhereInput, {
        nullable: true
    }),
    __metadata("design:type", SongAuthorWhereInput_1.SongAuthorWhereInput)
], SongCountAuthorsArgs.prototype, "where", void 0);
exports.SongCountAuthorsArgs = SongCountAuthorsArgs = __decorate([
    TypeGraphQL.ArgsType()
], SongCountAuthorsArgs);
//# sourceMappingURL=SongCountAuthorsArgs.js.map