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
  public constructor(validationErrors: ClassValidatorValidationError[]) {
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

export function apolloFormatError(formattedError: GraphQLFormattedError, error: unknown) {
  const originalError = unwrapResolverError(error)
  if (originalError instanceof ArgumentValidationError) {
    return new ValidationError(originalError?.validationErrors)
  }
  // an unknown value was passed to the validate function
  // Generic
  return formattedError
}
