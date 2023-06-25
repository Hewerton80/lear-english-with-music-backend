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
exports.CreateManySongAuthorArgs = void 0;
const TypeGraphQL = require("type-graphql");
const SongAuthorCreateManyInput_1 = require("../../../inputs/SongAuthorCreateManyInput");
let CreateManySongAuthorArgs = exports.CreateManySongAuthorArgs = class CreateManySongAuthorArgs {
};
__decorate([
    TypeGraphQL.Field(_type => [SongAuthorCreateManyInput_1.SongAuthorCreateManyInput], {
        nullable: false
    }),
    __metadata("design:type", Array)
], CreateManySongAuthorArgs.prototype, "data", void 0);
__decorate([
    TypeGraphQL.Field(_type => Boolean, {
        nullable: true
    }),
    __metadata("design:type", Boolean)
], CreateManySongAuthorArgs.prototype, "skipDuplicates", void 0);
exports.CreateManySongAuthorArgs = CreateManySongAuthorArgs = __decorate([
    TypeGraphQL.ArgsType()
], CreateManySongAuthorArgs);
//# sourceMappingURL=CreateManySongAuthorArgs.js.map