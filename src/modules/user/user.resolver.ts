import { Arg, Args, FieldResolver, Mutation, Query, Resolver, Root } from 'type-graphql'
import {
  FindUniqueUserArgs,
  UserOrderByWithRelationInput,
  UserWhereInput,
  User,
  UpdateOneUserArgs,
  UserPostArgs,
  Post,
} from '../../prisma/generated/type-graphql'
import { Service } from 'typedi'
import { PaginedUser } from './user.model'
import { PaginationArgs } from '../../common/args/pagination.args'
import { UserService } from './user.service'

@Service()
@Resolver(User)
export class UserResolver {
  constructor(private readonly userService: UserService) {}

  @Query(() => User)
  user(@Args() findUniqueUserArgs?: FindUniqueUserArgs) {
    return this.userService.findOne(findUniqueUserArgs)
  }

  @Query(() => PaginedUser)
  users(
    @Args() paginationArgs?: PaginationArgs,
    @Arg('orderBy') orderBy?: UserOrderByWithRelationInput,
    @Arg('where') where?: UserWhereInput
  ) {
    return this.userService.findMany({ paginationArgs, orderBy, where })
  }

  @FieldResolver(() => [Post], { nullable: false })
  posts(@Root() user: User, @Args() userPostArgs?: UserPostArgs) {
    return this.userService.findPostsByUserId({ userId: user.id, userPostArgs })
  }

  @Mutation(() => User)
  updateUser(@Args() updateOneUserArgs: UpdateOneUserArgs) {
    return this.userService.update(updateOneUserArgs)
  }
}
