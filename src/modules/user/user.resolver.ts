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
  UserWhereUniqueInput,
  FindManyUserArgs,
  FindUniqueUserArgs,
  User,
  UserUpdateInput,
  UpdateOneUserArgs,
  UserPostArgs,
  Post,
} from '../../prisma/generated/type-graphql'
import { Service } from 'typedi'
import { UserService } from './user.service'
import { GetPaginedDocsParans, getPaginedDocs } from '../../utis/getPaginadDocs'
import { Pagination } from '../../common/resolvers/pagination.resolver'
@Service()
@Resolver(User)
export class UserResolver {
  constructor(private readonly userService: UserService) {}

  @Query(() => [User])
  users(@Ctx() ctx: ApolloContext, @Args() findManyUserArgs?: FindManyUserArgs) {
    return ctx.prisma.user.findMany(findManyUserArgs)
  }

  @Query(() => User)
  user(@Ctx() ctx: ApolloContext, @Args() findUniqueUserArgs?: FindUniqueUserArgs) {
    // console.log('prisma', ctx.prisma)
    return ctx.prisma.user.findUnique(findUniqueUserArgs)
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

  @Query(() => Pagination<User>)
  userCount(
    @Ctx() ctx: ApolloContext,
    @Args() findManyUserArgs?: FindManyUserArgs
  ): GetPaginedDocsParans<User> {
    // const skip =findManyUserArgs.skip
    // const take =findManyUserArgs.take
    // getPaginedDocs({perPage:take,totalDocs:skip,currentPage:4,docs:[]})
    // return ctx.prisma.user.count(findManyUserArgs)
    return {
      docs: [],
      currentPage: 4,
      perPage: 4,
      totalDocs: 4,
    }
  }

  @Mutation(() => User)
  updateUser(@Ctx() ctx: ApolloContext, @Args() updateOneUserArgs: UpdateOneUserArgs) {
    return ctx.prisma.user.update(updateOneUserArgs)
  }
}
