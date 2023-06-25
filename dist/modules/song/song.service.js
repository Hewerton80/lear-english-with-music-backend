"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.SongService = void 0;
const typedi_1 = require("typedi");
const getPrismaPagination_1 = require("../../helpers/getPrismaPagination");
const httpStatusCode_1 = require("../../types/enums/httpStatusCode");
const slugfy_1 = require("../../utils/slugfy");
const author_service_1 = require("../author/author.service");
const graphql_1 = require("graphql");
let SongService = exports.SongService = class SongService {
    constructor(ctx, authorService) {
        this.ctx = ctx;
        this.authorService = authorService;
    }
    async checkIfNameOrSlugSongAlreadyExists(songWhereInput) {
        if (await this.ctx.prisma.song.findFirst({ where: songWhereInput })) {
            throw new graphql_1.GraphQLError('Já existe uma música com esse nome', {
                extensions: { code: httpStatusCode_1.HttpStatusCode.CONFLICT, status: 409 },
            });
        }
    }
    async checkIfSomeAuthorNotExists(authorIds) {
        const countAuthors = await this.authorService.count({ id: { in: authorIds } });
        if (countAuthors !== authorIds.length) {
            throw new graphql_1.GraphQLError('Algum author passado não existe ou contem valores repetidos', {
                extensions: { code: httpStatusCode_1.HttpStatusCode.NOT_FOUND, status: 404 },
            });
        }
    }
    findMany({ paginationInput, where, orderBy, }) {
        return (0, getPrismaPagination_1.prismaPagination)({
            model: this.ctx.prisma.song,
            where,
            orderBy,
            paginationInput,
        });
    }
    async findOne(findUniqueSongArgs) {
        const foundSong = await this.ctx.prisma.song.findUnique(findUniqueSongArgs);
        if (!foundSong) {
            throw new graphql_1.GraphQLError('Música não encontrada', {
                extensions: { code: httpStatusCode_1.HttpStatusCode.NOT_FOUND, status: 404 },
            });
        }
        return foundSong;
    }
    async create({ songCreateWithoutAuthorsInput, authorIds, }) {
        const { title, url, ...restSongCreateWithoutAuthorsInput } = songCreateWithoutAuthorsInput;
        const slug = (0, slugfy_1.slugfy)(title);
        await this.checkIfSomeAuthorNotExists(authorIds);
        await this.checkIfNameOrSlugSongAlreadyExists({
            OR: [{ title: { equals: title } }, { slug: { equals: slug } }],
        });
        return this.ctx.prisma.song.create({
            data: {
                slug,
                title,
                url,
                authors: {
                    createMany: {
                        data: authorIds.map((authorId) => ({ authorId })),
                    },
                },
                ...restSongCreateWithoutAuthorsInput,
            },
        });
    }
    async update({ songUpdateWithoutAuthorsInput, authorIds, songWhereUniqueInput, }) {
        await this.checkIfSomeAuthorNotExists(authorIds);
        const foundSong = await this.findOne({ where: songWhereUniqueInput });
        const data = {};
        if (songUpdateWithoutAuthorsInput === null || songUpdateWithoutAuthorsInput === void 0 ? void 0 : songUpdateWithoutAuthorsInput.title) {
            const slug = (0, slugfy_1.slugfy)(songUpdateWithoutAuthorsInput.title);
            await this.checkIfNameOrSlugSongAlreadyExists({
                AND: [
                    {
                        OR: [
                            { title: { equals: songUpdateWithoutAuthorsInput.title } },
                            { slug: { equals: slug } },
                        ],
                    },
                    {
                        id: { not: { equals: foundSong.id } },
                    },
                ],
            });
            data.title = songUpdateWithoutAuthorsInput.title;
            data.slug = slug;
        }
        return this.ctx.prisma.song.update({
            data: {
                ...data,
                authors: {
                    deleteMany: { songId: foundSong.id },
                    createMany: {
                        data: authorIds.map((authorId) => ({ authorId })),
                    },
                },
            },
            where: songWhereUniqueInput,
        });
    }
};
exports.SongService = SongService = __decorate([
    (0, typedi_1.Service)(),
    __param(0, (0, typedi_1.Inject)('context')),
    __metadata("design:paramtypes", [Object, author_service_1.AuthorService])
], SongService);
//# sourceMappingURL=song.service.js.map