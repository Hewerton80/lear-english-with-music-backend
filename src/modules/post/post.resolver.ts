import { Arg, Args, FieldResolver, Mutation, Query, Resolver, Root } from 'type-graphql'
import {
  PostWhereUniqueInput,
  FindManyPostArgs,
  FindUniquePostArgs,
  Post,
  PostUpdateInput,
  User,
} from '../../prisma/generated/type-graphql'
import { PostService } from './post.service'
import { Service } from 'typedi'
import { UserService } from '../user/user.service'

@Service()
@Resolver(Post)
export class PostResolver {
  constructor(
    private readonly postService: PostService,
    private readonly userService: UserService
  ) {}

  @Query(() => [Post])
  posts(@Args() findManyPostArgs?: FindManyPostArgs) {
    return this.postService.findMany(findManyPostArgs)
  }

  @Query(() => Post)
  post(@Args() findUniquePostArgs?: FindUniquePostArgs) {
    return this.postService.findOne(findUniquePostArgs)
  }

  @FieldResolver(() => User, { nullable: false })
  author(@Root() post: Post) {
    return this.userService.findOne({
      where: { id: post.authorId },
    })
  }

  @Query(() => Number)
  userCount(@Args() findManyPostsArgs?: FindManyPostArgs) {
    return this.postService.count(findManyPostsArgs)
  }

  @Mutation(() => Post)
  updatePost(
    @Arg('postWhereUniqueInput') postWhereUniqueInput: PostWhereUniqueInput,
    @Arg('postUpdateInput') postUpdateInput: PostUpdateInput
  ) {
    return this.postService.update(postWhereUniqueInput, postUpdateInput)
  }
}
