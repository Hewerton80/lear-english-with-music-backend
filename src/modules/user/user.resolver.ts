import { Arg, Args, FieldResolver, Mutation, Query, Resolver, Root } from 'type-graphql'
import {
  UserWhereUniqueInput,
  FindManyUserArgs,
  FindUniqueUserArgs,
  User,
  UserUpdateInput,
  UserPostArgs,
  Post,
} from '../../prisma/generated/type-graphql'
import { UserService } from './user.service'
import { Service } from 'typedi'

@Service()
@Resolver(User)
export class UserResolver {
  constructor(private readonly userService: UserService) {}

  @Query(() => [User])
  users(@Args() findManyUserArgs?: FindManyUserArgs) {
    return this.userService.findMany(findManyUserArgs)
  }

  @FieldResolver(() => [Post], {
    nullable: false,
  })
  posts(@Root() user: User, @Args() userPostArgs: UserPostArgs = {}) {
    return this.userService.findOne({ where: { id: user.id } }).Post(userPostArgs)
  }

  @Query(() => User)
  user(@Args() findUniqueUserArgs?: FindUniqueUserArgs) {
    return this.userService.findOne(findUniqueUserArgs)
  }

  @Query(() => Number)
  userCount(@Args() findManyUserArgs?: FindManyUserArgs) {
    return this.userService.count(findManyUserArgs)
  }

  @Mutation(() => User)
  updateUser(
    @Arg('userWhereUniqueInput') userWhereUniqueInput: UserWhereUniqueInput,
    @Arg('userUpdateInput') userUpdateInput: UserUpdateInput
  ) {
    return this.userService.update(userWhereUniqueInput, userUpdateInput)
  }
}
