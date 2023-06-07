// import {
//   Arg,
//   Args,
//   Authorized,
//   FieldResolver,
//   Mutation,
//   Query,
//   Resolver,
//   Root,
// } from 'type-graphql'
// import {
//   FindUniqueUserArgs,
//   UserOrderByWithRelationInput,
//   UserWhereInput,
//   User,
//   UpdateOneUserArgs,
//   UserPostArgs,
//   Post,
// } from '../../prisma/generated/type-graphql'
// import { Service } from 'typedi'
// import { PaginedUser } from './user.model'
// import { PaginationInput } from '../../common/inputs/pagination.inputs'
// import { UserService } from './user.service'
// import { Role } from '@prisma/client'

// @Service()
// @Resolver(User)
// export class UserResolver {
//   constructor(private readonly userService: UserService) {}

//   @Query(() => User)
//   user(@Args() findUniqueUserArgs?: FindUniqueUserArgs) {
//     return this.userService.findOne(findUniqueUserArgs)
//   }

//   @Authorized(Role.ADMIN)
//   @Query(() => PaginedUser)
//   users(
//     @Arg('paginationInput') paginationArgs: PaginationInput,
//     @Arg('orderBy', { nullable: true }) orderBy?: UserOrderByWithRelationInput,
//     @Arg('where', { nullable: true }) where?: UserWhereInput
//   ) {
//     return this.userService.findMany({ paginationArgs, orderBy, where })
//   }

//   @FieldResolver(() => [Post], { nullable: false })
//   posts(@Root() user: User, @Args() userPostArgs?: UserPostArgs) {
//     return this.userService.findPostsByUserId({ userId: user.id, userPostArgs })
//   }

//   @Mutation(() => User)
//   updateUser(@Args() updateOneUserArgs: UpdateOneUserArgs) {
//     return this.userService.update(updateOneUserArgs)
//   }
// }
