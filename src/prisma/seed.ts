import 'reflect-metadata'
import { PrismaClient } from '../prisma/generated/type-prisma'
// import { PrismaClient } from '@prisma/client'
import { slugfy } from '../utils/slugfy'

const staticSongAuthors = [
  'AC/DC',
  'Adele',
  'Arcade Fire',
  'Beyoncé',
  'Bruno Mars',
  'Coldplay',
  'Drake',
  'Ed Sheeran',
  'Eminem',
  'Elvis Presley',
  'Foo Fighters',
  'Green Day',
  "Guns N' Roses",
  'Imagine Dragons',
  'Jay-Z',
  'Justin Bieber',
  'Katy Perry',
  'Kendrick Lamar',
  'Lady Gaga',
  'Led Zeppelin',
  'Linkin Park',
  'Madonna',
  'Maroon 5',
  'Metallica',
  'Michael Jackson',
  'Muse',
  'Nirvana',
  'Pink Floyd',
  'Post Malone',
  'Queen',
  'Radiohead',
  'Red Hot Chili Peppers',
  'Rihanna',
  'Taylor Swift',
  'The Beatles',
  'The Rolling Stones',
  'The Weeknd',
  'Twenty One Pilots',
  'U2',
]

const prismaClient = new PrismaClient()
async function main() {
  await prismaClient.author.createMany({
    data: staticSongAuthors.map((name) => ({
      name,
      slug: slugfy(name),
    })),
  })
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
