import { Arg, Args, Mutation, Query, Resolver } from 'type-graphql'
import {
  FindUniqueAuthorArgs,
  AuthorOrderByWithRelationInput,
  AuthorWhereInput,
  Author,
  AuthorCreateInput,
  AuthorUpdateInput,
  AuthorWhereUniqueInput,
} from '../../prisma/generated/type-graphql'
import { Service } from 'typedi'
import { PaginedAuthor } from './author.model'
import { PaginationInput } from '../../common/inputs/pagination.inputs'
import { AuthorService } from './author.service'
import './author.validations-enhace-map'

@Service()
@Resolver(Author)
export class AuthorResolver {
  constructor(private readonly authorService: AuthorService) {}

  @Query(() => Author)
  author(@Args() findUniqueAuthorArgs?: FindUniqueAuthorArgs) {
    return this.authorService.findOne(findUniqueAuthorArgs)
  }

  @Query(() => PaginedAuthor)
  authors(
    @Arg('input') paginationInput: PaginationInput,
    @Arg('orderBy', { nullable: true }) orderBy?: AuthorOrderByWithRelationInput,
    @Arg('where', { nullable: true }) where?: AuthorWhereInput
  ) {
    return this.authorService.findMany({
      paginationInput: paginationInput,
      orderBy,
      where,
    })
  }

  //   @FieldResolver(() => [Post], { nullable: false })
  //   posts(@Root() author: Author, @Args() authorPostArgs?: AuthorPostArgs) {
  //     return this.authorService.findPostsByAuthorId({ authorId: author.id, authorPostArgs })
  //   }

  @Mutation(() => Author)
  createAuthor(@Arg('data') authorCreateInput: AuthorCreateInput) {
    return this.authorService.create(authorCreateInput)
  }

  @Mutation(() => Author)
  updateAuthor(
    @Arg('data') data: AuthorUpdateInput,
    @Arg('where') where: AuthorWhereUniqueInput
  ) {
    return this.authorService.update(data, where)
  }
}
