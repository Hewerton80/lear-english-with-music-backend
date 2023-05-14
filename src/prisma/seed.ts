import 'reflect-metadata'
import { PrismaClient } from '@prisma/client'
import { faker } from '@faker-js/faker'
import {
  UserCreateManyInput,
  Role,
  PostCreateManyInput,
  Status,
} from './generated/type-graphql'
import { getRange } from '../utis/getRange'
import { getRandomIntInclusive } from '../utis/getRandomIntInclusive'
import { hash } from 'bcrypt'

const prismaClient = new PrismaClient()
async function main() {
  const arrayRoles = Object.keys(Role) as (keyof typeof Role)[]
  const password = await hash('Senha123', 10)

  const usersData: UserCreateManyInput[] = getRange(500).map(() => ({
    id: faker.string.uuid(),
    email: faker.internet.email(),
    password,
    name: faker.internet.userName(),
    role: arrayRoles[getRandomIntInclusive(0, arrayRoles.length - 1)],
    createdAt: faker.date.past(),
  }))

  await prismaClient.user.createMany({
    data: usersData,
  })

  const arrayStatus = Object.keys(Status) as (keyof typeof Status)[]
  const usersIdArray = usersData.map(({ id }) => id)
  const postsData: PostCreateManyInput[] = getRange(1000).map(() => ({
    authorId: usersIdArray[getRandomIntInclusive(0, usersIdArray.length - 1)],
    content: faker.lorem.text(),
    status: arrayStatus[getRandomIntInclusive(0, arrayStatus.length - 1)],
    title: faker.lorem.text(),
  }))
  await prismaClient.post.createMany({ data: postsData })
}
main()
  .then(async () => {
    await prismaClient.$disconnect()
  })
  .catch(async (e) => {
    console.error(e)
    await prismaClient.$disconnect()
    process.exit(1)
  })
