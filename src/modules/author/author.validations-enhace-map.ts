import { MaxLength, ValidateNested, IsOptional } from 'class-validator'
import {
  applyArgsTypesEnhanceMap,
  applyInputTypesEnhanceMap,
} from '../../prisma/generated/type-graphql'

applyArgsTypesEnhanceMap({
  CreateOneAuthorArgs: {
    fields: {
      data: [ValidateNested()],
    },
  },
})

applyInputTypesEnhanceMap({
  AuthorCreateInput: {
    fields: {
      name: [MaxLength(150, { message: 'Nome deve ter no máximo 150 caracteres' })],
    },
  },
})
