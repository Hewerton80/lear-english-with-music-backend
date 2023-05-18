import {
  Arg,
  Args,
  FieldResolver,
  Info,
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
  PostWhereInput,
  UserPostArgs,
  Post,
} from '../../prisma/generated/type-graphql'
import { UserService } from './user.service'
import { Service } from 'typedi'
import { GraphQLResolveInfo } from 'graphql'
import { prismaClient } from '../../prisma/client'

@Service()
@Resolver(User)
export class UserResolver {
  constructor(private readonly userService: UserService) {}

  @Query(() => [User])
  getUsers(@Args() findManyUserArgs?: FindManyUserArgs) {
    return this.userService.findMany(findManyUserArgs)
  }

  @FieldResolver(() => [Post], {
    nullable: false,
  })
  posts(@Root() user: User, @Args() userPostArgs: UserPostArgs = {}) {
    return prismaClient.user
      .findUnique({
        where: { id: user.id },
        // include: { Post: { where: postWhereInput } },
      })
      .Post(userPostArgs)
  }

  @Query(() => User)
  getUser(@Args() findUniqueUserArgs?: FindUniqueUserArgs) {
    return this.userService.findOne(findUniqueUserArgs)
  }

  @Mutation(() => User)
  updateUser(
    @Arg('userWhereUniqueInput') userWhereUniqueInput: UserWhereUniqueInput,
    @Arg('userUpdateInput') userUpdateInput: UserUpdateInput
  ) {
    return this.userService.update(userWhereUniqueInput, userUpdateInput)
  }
}
