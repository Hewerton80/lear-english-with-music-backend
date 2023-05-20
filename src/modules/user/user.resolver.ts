import { Args, Ctx, FieldResolver, Mutation, Query, Resolver, Root } from 'type-graphql'
import {
  FindManyUserArgs,
  FindUniqueUserArgs,
  User,
  UpdateOneUserArgs,
  UserPostArgs,
  Post,
} from '../../prisma/generated/type-graphql'
import { Service } from 'typedi'
import { prismaPagination } from '../../helpers/getPrismaPagination'
import { User as PrismaUser, Prisma } from '@prisma/client'
import { PaginedUser } from './user.model'
import { PaginationArgs } from '../../common/args/pagination.args'
@Service()
@Resolver(User)
export class UserResolver {
  @Query(() => User)
  user(@Ctx() ctx: ApolloContext, @Args() findUniqueUserArgs?: FindUniqueUserArgs) {
    return ctx.prisma.user.findUnique(findUniqueUserArgs)
  }

  @Query(() => PaginedUser)
  users(
    @Ctx() ctx: ApolloContext,
    @Args() findManyUserArgs?: FindManyUserArgs,
    @Args() paginationArgs?: PaginationArgs
  ) {
    return prismaPagination<PrismaUser, Prisma.UserFindManyArgs>({
      model: ctx.prisma.user,
      args: findManyUserArgs,
      options: paginationArgs,
    })
  }

  @FieldResolver(() => [Post], {
    nullable: false,
  })
  posts(
    @Ctx() ctx: ApolloContext,
    @Root() user: User,
    @Args() userPostArgs: UserPostArgs = {}
  ) {
    return ctx.prisma.user.findUnique({ where: { id: user.id } }).Post(userPostArgs)
  }

  @Mutation(() => User)
  updateUser(@Ctx() ctx: ApolloContext, @Args() updateOneUserArgs: UpdateOneUserArgs) {
    return ctx.prisma.user.update(updateOneUserArgs)
  }
}
