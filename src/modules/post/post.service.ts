import { Inject, Service } from 'typedi'
import {
  FindUniquePostArgs,
  PostOrderByWithRelationInput,
  PostWhereInput,
  UpdateOnePostArgs,
} from '../../prisma/generated/type-graphql'
import { PaginationInput } from '../../common/inputs/pagination.inputs'
import { prismaPagination } from '../../helpers/getPrismaPagination'
import { Post as PrismaPost, Prisma } from '@prisma/client'

@Service()
export class PostService {
  constructor(@Inject('context') private readonly ctx: ApolloContext) {}

  findMany({
    paginationArgs,
    orderBy,
    where,
  }: {
    paginationArgs?: PaginationInput
    orderBy?: PostOrderByWithRelationInput
    where?: PostWhereInput
  }) {
    return prismaPagination<
      PrismaPost,
      Prisma.PostWhereInput,
      Prisma.PostOrderByWithRelationInput
    >({
      model: this.ctx.prisma.post,
      where,
      orderBy,
      paginationArgs,
    })
  }

  findOne(findUniquePostArgs?: FindUniquePostArgs) {
    return this.ctx.prisma.post.findUnique(findUniquePostArgs)
  }

  update(updateOnePostArgs: UpdateOnePostArgs) {
    return this.ctx.prisma.post.update(updateOnePostArgs)
  }
}
