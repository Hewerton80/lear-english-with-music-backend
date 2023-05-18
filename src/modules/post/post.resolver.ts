import { Arg, Args, FieldResolver, Mutation, Query, Resolver, Root } from 'type-graphql'
import {
  PostWhereUniqueInput,
  FindManyPostArgs,
  PostCountAggregate,
  UserRelationsResolver,
  PostRelationsResolver,
  // Autho
  FindUniquePostArgs,
  Post,
  PostUpdateInput,
  User,
  UserPostArgs,
} from '../../prisma/generated/type-graphql'
import { PostService } from './post.service'
import { Service } from 'typedi'
import { prismaClient } from '../../prisma/client'
import {
  transformCountFieldIntoSelectRelationsCount,
  transformInfoIntoPrismaArgs,
} from '../../prisma/generated/type-graphql/helpers'
import { GraphQLResolveInfo } from 'graphql'

@Service()
@Resolver(Post)
export class PostResolver {
  constructor(private readonly postService: PostService) {}

  @Query(() => [Post])
  getPosts(@Args() findManyPostArgs?: FindManyPostArgs) {
    return this.postService.findMany(findManyPostArgs)
  }

  @Query(() => Post)
  getPost(@Args() findUniquePostArgs?: FindUniquePostArgs) {
    return this.postService.findOne(findUniquePostArgs)
  }

  @FieldResolver(() => [User], { nullable: false })
  author(
    @Root() post: Post,
    @Args() userPostArgs: UserPostArgs = {},
    info: GraphQLResolveInfo
  ) {
    const { _count } = transformInfoIntoPrismaArgs(info)

    return prismaClient.post
      .findUniqueOrThrow({
        where: { id: post.id },
        // include: { Post: { where: postWhereInput } },
      })
      .author({
        ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
      })
  }

  @Mutation(() => Post)
  updatePost(
    @Arg('postWhereUniqueInput') postWhereUniqueInput: PostWhereUniqueInput,
    @Arg('postUpdateInput') postUpdateInput: PostUpdateInput
  ) {
    return this.postService.update(postWhereUniqueInput, postUpdateInput)
  }
}
