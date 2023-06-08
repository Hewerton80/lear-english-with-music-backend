// import { Inject, Service } from 'typedi'
// import {
//   FindUniqueUserArgs,
//   UserOrderByWithRelationInput,
//   UserWhereInput,
//   UpdateOneUserArgs,
//   UserPostArgs,
// } from '../../prisma/generated/type-graphql'
// import { PaginationInput } from '../../common/inputs/pagination.inputs'
// import { prismaPagination } from '../../helpers/getPrismaPagination'
// import { User as PrismaUser, Prisma } from '@prisma/client'

// @Service()
// export class UserService {
//   constructor(@Inject('context') private readonly ctx: ApolloContext) {}

//   findMany({
//     paginationInput,
//     orderBy,
//     where,
//   }: {
//     paginationInput?: PaginationInput
//     orderBy?: UserOrderByWithRelationInput
//     where?: UserWhereInput
//   }) {
//     return prismaPagination<
//       PrismaUser,
//       Prisma.UserWhereInput,
//       Prisma.UserOrderByWithRelationInput
//     >({
//       model: this.ctx.prisma.user,
//       where,
//       orderBy,
//       paginationInput,
//     })
//   }

//   findOne(findUniqueUserArgs?: FindUniqueUserArgs) {
//     return this.ctx.prisma.user.findUnique(findUniqueUserArgs)
//   }

//   findPostsByUserId({
//     userId,
//     userPostArgs,
//   }: {
//     userId: string
//     userPostArgs?: UserPostArgs
//   }) {
//     return this.ctx.prisma.user.findUnique({ where: { id: userId } }).Post(userPostArgs)
//   }

//   update(updateOneUserArgs: UpdateOneUserArgs) {
//     return this.ctx.prisma.user.update(updateOneUserArgs)
//   }
// }
