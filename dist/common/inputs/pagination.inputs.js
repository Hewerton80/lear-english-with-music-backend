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
exports.PaginationInput = void 0;
const type_graphql_1 = require("type-graphql");
const class_validator_1 = require("class-validator");
let PaginationInput = exports.PaginationInput = class PaginationInput {
};
__decorate([
    (0, type_graphql_1.Field)(() => Number, { nullable: true, defaultValue: 1 }),
    (0, class_validator_1.Min)(1, { message: 'currentPage deve ser no mínimo 1' }),
    __metadata("design:type", Number)
], PaginationInput.prototype, "currentPage", void 0);
__decorate([
    (0, class_validator_1.Min)(15, { message: 'perPage deve ser no mínimo 15' }),
    (0, class_validator_1.Max)(35, { message: 'perPage deve ser no máximo 35' }),
    (0, type_graphql_1.Field)(() => Number, { nullable: true, defaultValue: 25 }),
    __metadata("design:type", Number)
], PaginationInput.prototype, "perPage", void 0);
exports.PaginationInput = PaginationInput = __decorate([
    (0, type_graphql_1.InputType)()
], PaginationInput);
//# sourceMappingURL=pagination.inputs.js.map