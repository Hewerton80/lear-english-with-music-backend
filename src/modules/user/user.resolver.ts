import { Arg, Args, Mutation, Query, Resolver } from 'type-graphql'

import { prismaClient } from '../../prisma/client'
import {
  UserWhereUniqueInput,
  FindManyUserArgs,
  FindUniqueUserArgs,
  User,
  UserUpdateInput,
} from '../../prisma/generated/type-graphql'
import { UserService } from './user.services'

@Resolver(User)
export class UserResolver {
  private userService: UserService

  constructor() {
    this.userService = new UserService()
  }

  @Query(() => [User])
  getUsers(@Args() findManyUserArgs?: FindManyUserArgs) {
    return this.userService.findMany(findManyUserArgs)
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
