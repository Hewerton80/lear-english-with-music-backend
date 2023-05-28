import { ApolloServerErrorCode, unwrapResolverError } from '@apollo/server/errors'
import { GraphQLError, GraphQLFormattedError } from 'graphql'
import type { ValidationError as ClassValidatorValidationError } from 'class-validator'
import { ArgumentValidationError } from 'type-graphql'

type IValidationError = Pick<
  ClassValidatorValidationError,
  'property' | 'value' | 'constraints' | 'children'
>

function formatValidationErrors(validationError: IValidationError): IValidationError {
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
  }
}

export class ValidationError extends GraphQLError {
  public constructor(
    validationErrors: ClassValidatorValidationError[],
    code: keyof typeof ApolloServerErrorCode
  ) {
    super('Validation Error', {
      extensions: {
        code: ApolloServerErrorCode.BAD_USER_INPUT,
        validationErrors: validationErrors.map((validationError) =>
          formatValidationErrors(validationError)
        ),
      },
    })

    Object.setPrototypeOf(this, ValidationError.prototype)
  }
}

export function myFormatError(formattedError: GraphQLFormattedError, error: unknown) {
  const originalError = unwrapResolverError(error)
  // Validation
  if (originalError instanceof ArgumentValidationError) {
    return new ValidationError(originalError?.validationErrors, 'BAD_USER_INPUT')
  }

  // Generic
  return formattedError
}

export const apolloFormatError = (
  formattedError: GraphQLFormattedError,
  error: unknown
) => {
  // Return a different error
  if (
    formattedError.extensions.code === ApolloServerErrorCode.GRAPHQL_VALIDATION_FAILED
  ) {
    return {
      ...formattedError,
      message: "Your query doesn't match the schema. Try double-checking it!",
    }
  }

  // Otherwise return the formatted error. This error can also
  // be manipulated in other ways, as long as it's returned.
  return formattedError
}
