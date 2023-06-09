import { Inject, Service } from 'typedi'
import {
  FindUniqueSongArgs,
  Song,
  SongCreateWithoutAuthorsInput,
  SongOrderByWithRelationInput,
  SongWhereInput,
  UpdateOneSongArgs,
} from '../../prisma/generated/type-graphql'
import { PaginationInput } from '../../common/inputs/pagination.inputs'
import { prismaPagination } from '../../helpers/getPrismaPagination'
import { Song as PrismaSong, Prisma } from '@prisma/client'
import { GraphQLError } from 'graphql'
import { HttpStatusCode } from '../../types/enums/httpStatusCode'
import { slugfy } from '../../utils/slugfy'
import { AuthorService } from '../author/author.service'

@Service()
export class SongService {
  constructor(
    @Inject('context') private readonly ctx: ApolloContext,
    private readonly authorService: AuthorService
  ) {}

  private async checkIfNameOrSlugSongAlreadyExists({
    title,
    slug,
  }: Pick<Song, 'title' | 'slug'>) {
    if (await this.ctx.prisma.song.findFirst({ where: { OR: [{ title }, { slug }] } })) {
      throw new GraphQLError('Já existe uma música com esse nome', {
        extensions: { code: HttpStatusCode.CONFLICT, staus: 409 },
      })
    }
  }

  private async checkIfSomeAuthorNotExists(authorIds: string[]) {
    const countAuthors = await this.authorService.count({ id: { in: authorIds } })
    if (countAuthors !== authorIds.length) {
      throw new GraphQLError('Algum author passado não existe contem valores repetidos', {
        extensions: { code: HttpStatusCode.NOT_FOUND, staus: 404 },
      })
    }
  }

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

  async create(songCreateInput: SongCreateWithoutAuthorsInput, authorIds: string[]) {
    const slug = slugfy(songCreateInput.title)
    await this.checkIfSomeAuthorNotExists(authorIds)
    await this.checkIfNameOrSlugSongAlreadyExists({
      title: songCreateInput.title,
      slug,
    })

    return this.ctx.prisma.song.create({
      data: {
        slug,
        title: songCreateInput.title,
        url: songCreateInput.url,

        authors: {
          createMany: {
            data: authorIds.map((authorId) => ({ authorId })),
          },
        },
      },
    })
  }
  // update(updateOneSongArgs: UpdateOneSongArgs) {
  //   return this.ctx.prisma.song.update(updateOneSongArgs)
  // }
}
