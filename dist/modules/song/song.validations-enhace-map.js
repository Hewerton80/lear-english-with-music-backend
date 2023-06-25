"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const class_validator_1 = require("class-validator");
const type_graphql_1 = require("../../prisma/generated/type-graphql");
(0, type_graphql_1.applyArgsTypesEnhanceMap)({
    CreateOneSongArgs: {
        fields: {
            data: [(0, class_validator_1.ValidateNested)()],
        },
    },
});
(0, type_graphql_1.applyInputTypesEnhanceMap)({
    SongCreateWithoutAuthorsInput: {
        fields: {
            title: [(0, class_validator_1.IsNotEmpty)({ message: 'Título é obrigatório' })],
            url: [(0, class_validator_1.IsNotEmpty)({ message: 'Url é obrigatório' })],
        },
    },
});
//# sourceMappingURL=song.validations-enhace-map.js.map