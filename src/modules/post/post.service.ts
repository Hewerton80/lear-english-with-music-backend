import { prismaClient } from '../../prisma/client'
import {
  FindManyPostArgs,
  FindUniquePostArgs,
  PostUpdateInput,
  PostWhereUniqueInput,
} from '../../prisma/generated/type-graphql'
import { Service } from 'typedi'

@Service()
export class PostService {
  findMany(findManyPostArgs?: FindManyPostArgs) {
    return prismaClient.post.findMany(findManyPostArgs)
  }

  findOne(findUniquePostArgs?: FindUniquePostArgs) {
    return prismaClient.post.findUnique(findUniquePostArgs)
  }

  update(postWhereUniqueInput: PostWhereUniqueInput, postUpdateInput: PostUpdateInput) {
    return prismaClient.post.update({
      where: postWhereUniqueInput,
      data: postUpdateInput,
    })
  }
}
