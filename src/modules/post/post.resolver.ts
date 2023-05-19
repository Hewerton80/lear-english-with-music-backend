import {
  Arg,
  Args,
  Ctx,
  FieldResolver,
  Mutation,
  Query,
  Resolver,
  Root,
} from 'type-graphql'
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
  posts(@Ctx() ctx: ApolloContext, @Args() findManyPostArgs?: FindManyPostArgs) {
    return this.postService.findMany(findManyPostArgs)
  }

  @Query(() => Post)
  post(@Ctx() ctx: ApolloContext, @Args() findUniquePostArgs?: FindUniquePostArgs) {
    return this.postService.findOne(findUniquePostArgs)
  }

  @FieldResolver(() => User, { nullable: false })
  author(@Ctx() ctx: ApolloContext, @Root() post: Post) {
    return this.userService.findOne({
      where: { id: post.authorId },
    })
  }

  @Query(() => Number)
  userCount(@Ctx() ctx: ApolloContext, @Args() findManyPostsArgs?: FindManyPostArgs) {
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
