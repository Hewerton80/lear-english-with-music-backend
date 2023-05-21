import { Arg, Args, FieldResolver, Mutation, Query, Resolver, Root } from 'type-graphql'
import {
  FindUniquePostArgs,
  Post,
  PostOrderByWithRelationInput,
  PostWhereInput,
  UpdateOnePostArgs,
  User,
} from '../../prisma/generated/type-graphql'
import { Service } from 'typedi'
import { PaginedPost } from './post.model'
import { PaginationArgs } from '../../common/args/pagination.args'
import { UserService } from '../user/user.service'
import { PostService } from './post.service'

@Service()
@Resolver(Post)
export class PostResolver {
  constructor(
    private readonly postService: PostService,
    private readonly userService: UserService
  ) {}

  post(@Args() findUniquePostArgs?: FindUniquePostArgs) {
    return this.postService.findOne(findUniquePostArgs)
  }

  @Query(() => PaginedPost)
  posts(
    @Args() paginationArgs?: PaginationArgs,
    @Arg('orderBy') orderBy?: PostOrderByWithRelationInput,
    @Arg('where') where?: PostWhereInput
  ) {
    return this.postService.findMany({ paginationArgs, orderBy, where })
  }

  @FieldResolver(() => User, { nullable: false })
  author(@Root() post: Post) {
    return this.userService.findOne({
      where: { id: post.authorId },
    })
  }

  @Mutation(() => Post)
  updatePost(@Args() updateOnePostArgs: UpdateOnePostArgs) {
    return this.userService.update(updateOnePostArgs)
  }
}
