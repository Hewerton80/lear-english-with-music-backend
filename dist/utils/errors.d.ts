import { GraphQLError, GraphQLFormattedError } from 'graphql';
import type { ValidationError as ClassValidatorValidationError } from 'class-validator';
export declare class ValidationError extends GraphQLError {
    constructor(validationErrors: ClassValidatorValidationError[]);
}
export declare function apolloFormatError(formattedError: GraphQLFormattedError, error: unknown): GraphQLFormattedError;
