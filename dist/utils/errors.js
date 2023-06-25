"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.apolloFormatError = exports.ValidationError = void 0;
const errors_1 = require("@apollo/server/errors");
const graphql_1 = require("graphql");
const type_graphql_1 = require("type-graphql");
function formatValidationErrors(validationError) {
    return {
        property: validationError.property,
        ...(validationError.value && { value: validationError.value }),
        ...(validationError.constraints && {
            constraints: validationError.constraints,
        }),
        ...(validationError.children &&
            validationError.children.length !== 0 && {
            children: validationError.children.map((child) => formatValidationErrors(child)),
        }),
    };
}
class ValidationError extends graphql_1.GraphQLError {
    constructor(validationErrors) {
        super('Validation Error', {
            extensions: {
                code: errors_1.ApolloServerErrorCode.BAD_USER_INPUT,
                validationErrors: validationErrors.map((validationError) => formatValidationErrors(validationError)),
            },
        });
        Object.setPrototypeOf(this, ValidationError.prototype);
    }
}
exports.ValidationError = ValidationError;
function apolloFormatError(formattedError, error) {
    const originalError = (0, errors_1.unwrapResolverError)(error);
    if (originalError instanceof type_graphql_1.ArgumentValidationError) {
        return new ValidationError(originalError === null || originalError === void 0 ? void 0 : originalError.validationErrors);
    }
    return formattedError;
}
exports.apolloFormatError = apolloFormatError;
//# sourceMappingURL=errors.js.map