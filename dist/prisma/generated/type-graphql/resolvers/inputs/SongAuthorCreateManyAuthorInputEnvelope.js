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
exports.SongAuthorCreateManyAuthorInputEnvelope = void 0;
const TypeGraphQL = require("type-graphql");
const SongAuthorCreateManyAuthorInput_1 = require("../inputs/SongAuthorCreateManyAuthorInput");
let SongAuthorCreateManyAuthorInputEnvelope = exports.SongAuthorCreateManyAuthorInputEnvelope = class SongAuthorCreateManyAuthorInputEnvelope {
};
__decorate([
    TypeGraphQL.Field(_type => [SongAuthorCreateManyAuthorInput_1.SongAuthorCreateManyAuthorInput], {
        nullable: false
    }),
    __metadata("design:type", Array)
], SongAuthorCreateManyAuthorInputEnvelope.prototype, "data", void 0);
__decorate([
    TypeGraphQL.Field(_type => Boolean, {
        nullable: true
    }),
    __metadata("design:type", Boolean)
], SongAuthorCreateManyAuthorInputEnvelope.prototype, "skipDuplicates", void 0);
exports.SongAuthorCreateManyAuthorInputEnvelope = SongAuthorCreateManyAuthorInputEnvelope = __decorate([
    TypeGraphQL.InputType("SongAuthorCreateManyAuthorInputEnvelope", {
        isAbstract: true
    })
], SongAuthorCreateManyAuthorInputEnvelope);
//# sourceMappingURL=SongAuthorCreateManyAuthorInputEnvelope.js.map