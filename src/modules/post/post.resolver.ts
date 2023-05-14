import { Arg, Args, Mutation, Query, Resolver } from 'type-graphql'
import {
  PostWhereUniqueInput,
  FindManyPostArgs,
  PostCountAggregate,
  FindUniquePostArgs,
  Post,
  PostUpdateInput,
} from '../../prisma/generated/type-graphql'
import { PostService } from './post.service'
import { Service } from 'typedi'

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

  @Mutation(() => Post)
  updatePost(
    @Arg('postWhereUniqueInput') postWhereUniqueInput: PostWhereUniqueInput,
    @Arg('postUpdateInput') postUpdateInput: PostUpdateInput
  ) {
    return this.postService.update(postWhereUniqueInput, postUpdateInput)
  }
}
