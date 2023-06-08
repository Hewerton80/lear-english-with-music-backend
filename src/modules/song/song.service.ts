import { Inject, Service } from 'typedi'
import {
  FindUniqueSongArgs,
  SongOrderByWithRelationInput,
  SongWhereInput,
  UpdateOneSongArgs,
} from '../../prisma/generated/type-graphql'
import { PaginationInput } from '../../common/inputs/pagination.inputs'
import { prismaPagination } from '../../helpers/getPrismaPagination'
import { Song as PrismaSong, Prisma } from '@prisma/client'

@Service()
export class SongService {
  constructor(@Inject('context') private readonly ctx: ApolloContext) {}

  findMany({
    paginationInput,
    orderBy,
    where,
  }: {
    paginationInput?: PaginationInput
    orderBy?: SongOrderByWithRelationInput
    where?: SongWhereInput
  }) {
    return prismaPagination<
      PrismaSong,
      Prisma.SongWhereInput,
      Prisma.SongOrderByWithRelationInput
    >({
      model: this.ctx.prisma.song,
      where,
      orderBy,
      paginationInput,
    })
  }

  findOne(findUniqueSongArgs?: FindUniqueSongArgs) {
    return this.ctx.prisma.song.findUnique(findUniqueSongArgs)
  }

  // update(updateOneSongArgs: UpdateOneSongArgs) {
  //   return this.ctx.prisma.song.update(updateOneSongArgs)
  // }
}
