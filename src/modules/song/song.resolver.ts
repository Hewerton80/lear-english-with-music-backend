import {
  Arg,
  Args,
  Ctx,
  FieldResolver,
  Mutation,
  Query,
  Resolver,
  Root,
} from 'type-graphql'
import {
  Author,
  FindUniqueSongArgs,
  Song,
  SongCreateWithoutAuthorsInput,
  SongOrderByWithRelationInput,
  SongUpdateWithoutAuthorsInput,
  SongWhereInput,
  SongWhereUniqueInput,
} from '../../prisma/generated/type-graphql'
import { Service } from 'typedi'
import { PaginationInput } from '../../common/inputs/pagination.inputs'
import { SongService } from './song.service'
import { PaginedSong } from './song.model'
import { ArrayIds } from '../../common/inputs/array-ids.input'

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

  @Query(() => Song)
  song(@Args() findUniqueSongArgs?: FindUniqueSongArgs) {
    return this.songService.findOne(findUniqueSongArgs)
  }

  @FieldResolver(() => [Author])
  authors(@Root() song: Song, @Ctx() ctx: ApolloContext) {
    return ctx.prisma.author.findMany({
      where: { songs: { some: { songId: song.id } } },
    })
  }

  @Mutation(() => Song)
  createSong(
    @Arg('data') songCreateWithoutAuthorsInput: SongCreateWithoutAuthorsInput,
    @Arg('authorIds') { values }: ArrayIds
  ) {
    return this.songService.create({ songCreateWithoutAuthorsInput, authorIds: values })
  }

  @Mutation(() => Song)
  updateSong(
    @Arg('data') songUpdateWithoutAuthorsInput: SongUpdateWithoutAuthorsInput,
    @Arg('where') songWhereUniqueInput: SongWhereUniqueInput,
    @Arg('authorIds') { values }: ArrayIds
  ) {
    return this.songService.update({
      songUpdateWithoutAuthorsInput,
      songWhereUniqueInput,
      authorIds: values,
    })
  }
}
