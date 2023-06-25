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
exports.UpsertOneSongArgs = void 0;
const TypeGraphQL = require("type-graphql");
const SongCreateInput_1 = require("../../../inputs/SongCreateInput");
const SongUpdateInput_1 = require("../../../inputs/SongUpdateInput");
const SongWhereUniqueInput_1 = require("../../../inputs/SongWhereUniqueInput");
let UpsertOneSongArgs = exports.UpsertOneSongArgs = class UpsertOneSongArgs {
};
__decorate([
    TypeGraphQL.Field(_type => SongWhereUniqueInput_1.SongWhereUniqueInput, {
        nullable: false
    }),
    __metadata("design:type", SongWhereUniqueInput_1.SongWhereUniqueInput)
], UpsertOneSongArgs.prototype, "where", void 0);
__decorate([
    TypeGraphQL.Field(_type => SongCreateInput_1.SongCreateInput, {
        nullable: false
    }),
    __metadata("design:type", SongCreateInput_1.SongCreateInput)
], UpsertOneSongArgs.prototype, "create", void 0);
__decorate([
    TypeGraphQL.Field(_type => SongUpdateInput_1.SongUpdateInput, {
        nullable: false
    }),
    __metadata("design:type", SongUpdateInput_1.SongUpdateInput)
], UpsertOneSongArgs.prototype, "update", void 0);
exports.UpsertOneSongArgs = UpsertOneSongArgs = __decorate([
    TypeGraphQL.ArgsType()
], UpsertOneSongArgs);
//# sourceMappingURL=UpsertOneSongArgs.js.map