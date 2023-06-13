import { Inject, Service } from 'typedi'
import {
  FindUniqueSongArgs,
  Song,
  SongCreateWithoutAuthorsInput,
  SongOrderByWithRelationInput,
  SongUpdateWithoutAuthorsInput,
  SongWhereInput,
  FindFirstAuthorArgs,
  UpdateOneSongArgs,
  AuthorWhereInput,
  SongWhereUniqueInput,
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

  private async checkIfNameOrSlugSongAlreadyExists(songWhereInput: SongWhereInput) {
    if (await this.ctx.prisma.song.findFirst({ where: songWhereInput })) {
      throw new GraphQLError('Já existe uma música com esse nome', {
        extensions: { code: HttpStatusCode.CONFLICT, status: 409 },
      })
    }
  }

  private async checkIfSomeAuthorNotExists(authorIds: string[]) {
    const countAuthors = await this.authorService.count({ id: { in: authorIds } })
    if (countAuthors !== authorIds.length) {
      throw new GraphQLError(
        'Algum author passado não existe ou contem valores repetidos',
        {
          extensions: { code: HttpStatusCode.NOT_FOUND, status: 404 },
        }
      )
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

  async findOne(findUniqueSongArgs?: FindUniqueSongArgs) {
    const foundSong = await this.ctx.prisma.song.findUnique(findUniqueSongArgs)
    if (!foundSong) {
      throw new GraphQLError('Música não encontrada', {
        extensions: { code: HttpStatusCode.NOT_FOUND, status: 404 },
      })
    }
    return foundSong
  }

  async create({
    songCreateWithoutAuthorsInput,
    authorIds,
  }: {
    songCreateWithoutAuthorsInput: SongCreateWithoutAuthorsInput
    authorIds: string[]
  }) {
    const { title, url, ...restSongCreateWithoutAuthorsInput } =
      songCreateWithoutAuthorsInput
    const slug = slugfy(title)
    await this.checkIfSomeAuthorNotExists(authorIds)
    await this.checkIfNameOrSlugSongAlreadyExists({
      OR: [{ title: { equals: title } }, { slug: { equals: slug } }],
    })

    return this.ctx.prisma.song.create({
      data: {
        slug,
        title,
        url,
        authors: {
          createMany: {
            data: authorIds.map((authorId) => ({ authorId })),
          },
        },
        ...restSongCreateWithoutAuthorsInput,
      },
    })
  }

  async update({
    songUpdateWithoutAuthorsInput,
    authorIds,
    songWhereUniqueInput,
  }: {
    songUpdateWithoutAuthorsInput: SongUpdateWithoutAuthorsInput
    authorIds: string[]
    songWhereUniqueInput: SongWhereUniqueInput
  }) {
    await this.checkIfSomeAuthorNotExists(authorIds)

    const foundSong = await this.findOne({ where: songWhereUniqueInput })

    const data: SongUpdateWithoutAuthorsInput & { slug?: string } = {}

    if (songUpdateWithoutAuthorsInput?.title) {
      const slug = slugfy(songUpdateWithoutAuthorsInput.title)
      await this.checkIfNameOrSlugSongAlreadyExists({
        AND: [
          {
            OR: [
              { title: { equals: songUpdateWithoutAuthorsInput.title } },
              { slug: { equals: slug } },
            ],
          },
          {
            id: { not: { equals: foundSong.id } },
          },
        ],
      })
      data.title = songUpdateWithoutAuthorsInput.title
      data.slug = slug
    }

    return this.ctx.prisma.song.update({
      data: {
        ...data,
        authors: {
          deleteMany: { songId: foundSong.id },
          createMany: {
            data: authorIds.map((authorId) => ({ authorId })),
          },
        },
      },
      where: songWhereUniqueInput,
    })
  }
}
