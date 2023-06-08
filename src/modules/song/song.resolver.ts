import { Arg, Query, Resolver } from 'type-graphql'
import {
  Song,
  SongOrderByWithRelationInput,
  SongWhereInput,
} from '../../prisma/generated/type-graphql'
import { Service } from 'typedi'
import { PaginationInput } from '../../common/inputs/pagination.inputs'
import { SongService } from './song.service'
import { PaginedSong } from './song.model'

@Service()
@Resolver(Song)
export class SongResolver {
  constructor(private readonly songService: SongService) {}

  @Query(() => PaginedSong)
  songs(
    @Arg('paginationInput') paginationInput: PaginationInput,
    @Arg('orderBy', { nullable: true }) orderBy?: SongOrderByWithRelationInput,
    @Arg('where', { nullable: true }) where?: SongWhereInput
  ) {
    return this.songService.findMany({ paginationInput, orderBy, where })
  }
}
