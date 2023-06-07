// import 'reflect-metadata'
// import { PrismaClient } from '@prisma/client'
// import { faker } from '@faker-js/faker'
// import {
//   UserCreateManyInput,
//   Role,
//   PostCreateManyInput,
//   Status,
// } from './generated/type-graphql'
// import { getRange } from '../utils/getRange'
// import { getRandomIntInclusive } from '../utils/getRandomIntInclusive'
// import { hash } from 'bcrypt'
// import { getRamdomKeyFromAObject } from '../utils/getRamdomKeyFromAObject'

// const prismaClient = new PrismaClient()
// async function main() {
//   const password = await hash('Senha123', 10)

//   const usersData: UserCreateManyInput[] = getRange(500).map(() => ({
//     id: faker.string.uuid(),
//     email: faker.internet.email(),
//     password,
//     name: faker.internet.userName(),
//     role: getRamdomKeyFromAObject(Role),
//     createdAt: faker.date.past(),
//   }))

//   await prismaClient.user.createMany({ data: usersData })

//   const usersIdArray = usersData.map(({ id }) => id)
//   const postsData: PostCreateManyInput[] = getRange(1000).map(() => ({
//     authorId: usersIdArray[getRandomIntInclusive(0, usersIdArray.length - 1)],
//     content: faker.lorem.text(),
//     status: getRamdomKeyFromAObject(Status),
//     title: faker.lorem.text(),
//   }))
//   await prismaClient.post.createMany({ data: postsData })
// }
// main()
//   .then(async () => {
//     await prismaClient.$disconnect()
//   })
//   .catch(async (e) => {
//     console.error(e)
//     await prismaClient.$disconnect()
//     process.exit(1)
//   })
