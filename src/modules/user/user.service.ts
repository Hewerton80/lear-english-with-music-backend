import { Service } from 'typedi'
import { prismaClient } from '../../prisma/client'

import {
  UserWhereUniqueInput,
  FindManyUserArgs,
  FindUniqueUserArgs,
  UserUpdateInput,
} from '../../prisma/generated/type-graphql'

@Service()
export class UserService {
  findMany(findManyUserArgs?: FindManyUserArgs) {
    return prismaClient.user.findMany(findManyUserArgs)
  }

  findOne(findUniqueUserArgs?: FindUniqueUserArgs) {
    return prismaClient.user.findUnique(findUniqueUserArgs)
  }

  count(findManyUserArgs?: FindManyUserArgs) {
    return prismaClient.user.count(findManyUserArgs)
  }

  update(userWhereUniqueInput: UserWhereUniqueInput, userUpdateInput: UserUpdateInput) {
    return prismaClient.user.update({
      where: userWhereUniqueInput,
      data: userUpdateInput,
    })
  }
}
