import { prismaClient } from '../../prisma/client'

import {
  UserWhereUniqueInput,
  FindManyUserArgs,
  FindUniqueUserArgs,
  UserUpdateInput,
} from '../../prisma/generated/type-graphql'

export class UserService {
  findMany(findManyUserArgs?: FindManyUserArgs) {
    return prismaClient.user.findMany(findManyUserArgs)
  }

  findOne(findUniqueUserArgs?: FindUniqueUserArgs) {
    return prismaClient.user.findUnique(findUniqueUserArgs)
  }

  update(userWhereUniqueInput: UserWhereUniqueInput, userUpdateInput: UserUpdateInput) {
    return prismaClient.user.update({
      where: userWhereUniqueInput,
      data: userUpdateInput,
    })
  }
}
