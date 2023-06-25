"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
require("reflect-metadata");
const type_prisma_1 = require("../prisma/generated/type-prisma");
const slugfy_1 = require("../utils/slugfy");
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
];
const prismaClient = new type_prisma_1.PrismaClient();
async function main() {
    await prismaClient.author.createMany({
        data: staticSongAuthors.map((name) => ({
            name,
            slug: (0, slugfy_1.slugfy)(name),
        })),
    });
}
main()
    .then(async () => {
    await prismaClient.$disconnect();
})
    .catch(async (e) => {
    console.error(e);
    await prismaClient.$disconnect();
    process.exit(1);
});
//# sourceMappingURL=seed.js.map