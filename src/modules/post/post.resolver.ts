import { Args, Ctx, FieldResolver, Mutation, Query, Resolver, Root } from 'type-graphql'
import {
  FindManyPostArgs,
  FindUniquePostArgs,
  Post,
  UpdateOnePostArgs,
  User,
} from '../../prisma/generated/type-graphql'
import { Service } from 'typedi'
import { prismaPagination } from '../../helpers/getPrismaPagination'
import { PaginedPost } from './post.model'
import { PaginationArgs } from '../../common/args/pagination.args'
import { Prisma, Post as PrismaPost } from '@prisma/client'

@Service()
@Resolver(Post)
export class PostResolver {
  post(@Ctx() ctx: ApolloContext, @Args() findUniquePostArgs?: FindUniquePostArgs) {
    return ctx.prisma.post.findUnique(findUniquePostArgs)
  }

  @Query(() => PaginedPost)
  posts(
    @Ctx() ctx: ApolloContext,
    @Args() findManyPostArgs?: FindManyPostArgs,
    @Args() paginationArgs?: PaginationArgs
  ) {
    return prismaPagination<PrismaPost, Prisma.PostFindManyArgs>({
      model: ctx.prisma.post,
      args: findManyPostArgs,
      options: paginationArgs,
    })
  }

  @FieldResolver(() => User, { nullable: false })
  author(@Ctx() ctx: ApolloContext, @Root() post: Post) {
    return ctx.prisma.user.findUnique({
      where: { id: post.authorId },
    })
  }

  @Mutation(() => Post)
  updatePost(@Ctx() ctx: ApolloContext, @Args() updateOnePostArgs: UpdateOnePostArgs) {
    return ctx.prisma.post.update(updateOnePostArgs)
  }
}
