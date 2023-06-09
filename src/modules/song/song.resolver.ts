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
  SongWhereInput,
  SongAuthorsArgs,
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
  async authors(
    @Root() song: Song,
    // @Args() songAuthorsArgs?: SongAuthorsArgs,
    @Ctx() ctx: ApolloContext
  ) {
    const authors = await ctx.prisma.author.findMany({
      where: { songs: { some: { songId: song.id } } },
    })
    // const foundSong = await ctx.prisma.song.findFirst({
    //   where: { id: song.id },
    //   include: { authors: {} },
    // })

    // foundSong.
    // const authors = await this.songService
    //   .findOne({ where: { id: song.id } })
    //   .authors({where:{}})

    return authors
  }

  @Mutation(() => Song)
  createSong(
    @Arg('data') songCreateInput: SongCreateWithoutAuthorsInput,
    @Arg('authorIds') { values }: ArrayIds
  ) {
    return this.songService.create(songCreateInput, values)
  }
}
