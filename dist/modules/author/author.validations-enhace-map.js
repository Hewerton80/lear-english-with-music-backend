"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const class_validator_1 = require("class-validator");
const type_graphql_1 = require("../../prisma/generated/type-graphql");
(0, type_graphql_1.applyArgsTypesEnhanceMap)({
    CreateOneAuthorArgs: {
        fields: {
            data: [(0, class_validator_1.ValidateNested)()],
        },
    },
});
(0, type_graphql_1.applyInputTypesEnhanceMap)({
    AuthorCreateInput: {
        fields: {
            name: [
                (0, class_validator_1.MaxLength)(150, { message: 'Nome deve ter no máximo 150 caracteres' }),
                (0, class_validator_1.IsNotEmpty)({ message: 'Nome é obrigatório' }),
            ],
        },
    },
});
//# sourceMappingURL=author.validations-enhace-map.js.map