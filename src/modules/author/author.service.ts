import { Inject, Service } from 'typedi'
import {
  FindUniqueAuthorArgs,
  AuthorOrderByWithRelationInput,
  AuthorWhereInput,
  AuthorCreateInput,
  Author,
  AuthorUpdateInput,
  AuthorWhereUniqueInput,
} from '../../prisma/generated/type-graphql'
import { PaginationInput } from '../../common/inputs/pagination.inputs'
import { prismaPagination } from '../../helpers/getPrismaPagination'
// import { Author as PrismaAuthor, Prisma } from '../../prisma/generated/type-prisma'
import { Author as PrismaAuthor, Prisma } from '@prisma/client'
import { GraphQLError } from 'graphql'
import { HttpStatusCode } from '../../types/enums/httpStatusCode'
import { slugfy } from '../../utils/slugfy'

@Service()
export class AuthorService {
  constructor(@Inject('context') private readonly ctx: ApolloContext) {}

  private async checkIfNameOrSlugAuthorAlreadyExists({
    name,
    slug,
  }: Pick<Author, 'name' | 'slug'>) {
    if (await this.ctx.prisma.author.findFirst({ where: { OR: [{ name }, { slug }] } })) {
      throw new GraphQLError('Já existe uma banda/cantor(a) com esse nome', {
        extensions: { code: HttpStatusCode.CONFLICT, status: 409 },
      })
    }
  }

  findMany({
    paginationInput,
    orderBy,
    where,
  }: {
    paginationInput?: PaginationInput
    orderBy?: AuthorOrderByWithRelationInput
    where?: AuthorWhereInput
  }) {
    return prismaPagination<
      PrismaAuthor,
      Prisma.AuthorWhereInput,
      Prisma.AuthorOrderByWithRelationInput
    >({
      model: this.ctx.prisma.author,
      where,
      orderBy,
      paginationInput,
    })
  }

  async count(authorWhereInput: AuthorWhereInput) {
    return this.ctx.prisma.author.count({ where: authorWhereInput })
  }

  async findOne(findUniqueAuthorArgs?: FindUniqueAuthorArgs) {
    const foundAuthor = await this.ctx.prisma.author.findUnique(findUniqueAuthorArgs)
    if (!foundAuthor) {
      throw new GraphQLError('Autor não encontrado', {
        extensions: { code: HttpStatusCode.NOT_FOUND, status: 404 },
      })
    }
    return foundAuthor
  }

  async create({ name }: AuthorCreateInput) {
    const slug = slugfy(name)
    await this.checkIfNameOrSlugAuthorAlreadyExists({ name, slug })
    return this.ctx.prisma.author.create({ data: { name, slug } })
  }

  async update({ name }: AuthorUpdateInput, where: AuthorWhereUniqueInput) {
    const slug = slugfy(name)
    await this.checkIfNameOrSlugAuthorAlreadyExists({ name, slug })
    return this.ctx.prisma.author.update({
      data: { name, slug },
      where,
    })
  }
}
