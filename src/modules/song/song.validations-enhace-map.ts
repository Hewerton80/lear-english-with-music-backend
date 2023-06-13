import { MaxLength, ValidateNested, IsNotEmpty } from 'class-validator'
import {
  applyArgsTypesEnhanceMap,
  applyInputTypesEnhanceMap,
} from '../../prisma/generated/type-graphql'

applyArgsTypesEnhanceMap({
  CreateOneSongArgs: {
    fields: {
      data: [ValidateNested()],
    },
  },
})

applyInputTypesEnhanceMap({
  SongCreateWithoutAuthorsInput: {
    fields: {
      title: [IsNotEmpty({ message: 'Título é obrigatório' })],
      url: [IsNotEmpty({ message: 'Url é obrigatório' })],
    },
  },
})
