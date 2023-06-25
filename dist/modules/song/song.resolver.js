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
exports.SongResolver = void 0;
const type_graphql_1 = require("type-graphql");
const type_graphql_2 = require("../../prisma/generated/type-graphql");
const typedi_1 = require("typedi");
const pagination_inputs_1 = require("../../common/inputs/pagination.inputs");
const song_service_1 = require("./song.service");
const song_model_1 = require("./song.model");
const array_ids_input_1 = require("../../common/inputs/array-ids.input");
require("./song.validations-enhace-map");
let SongResolver = exports.SongResolver = class SongResolver {
    constructor(songService) {
        this.songService = songService;
    }
    songs(paginationInput, orderBy, where) {
        return this.songService.findMany({ paginationInput, orderBy, where });
    }
    song(findUniqueSongArgs) {
        return this.songService.findOne(findUniqueSongArgs);
    }
    authors(song, ctx) {
        return ctx.prisma.author.findMany({
            where: { songs: { some: { songId: song.id } } },
        });
    }
    createSong(songCreateWithoutAuthorsInput, { values }) {
        return this.songService.create({ songCreateWithoutAuthorsInput, authorIds: values });
    }
    updateSong(songUpdateWithoutAuthorsInput, songWhereUniqueInput, { values }) {
        return this.songService.update({
            songUpdateWithoutAuthorsInput,
            songWhereUniqueInput,
            authorIds: values,
        });
    }
};
__decorate([
    (0, type_graphql_1.Query)(() => song_model_1.PaginedSong),
    __param(0, (0, type_graphql_1.Arg)('paginationInput')),
    __param(1, (0, type_graphql_1.Arg)('orderBy', { nullable: true })),
    __param(2, (0, type_graphql_1.Arg)('where', { nullable: true })),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [pagination_inputs_1.PaginationInput,
        type_graphql_2.SongOrderByWithRelationInput,
        type_graphql_2.SongWhereInput]),
    __metadata("design:returntype", void 0)
], SongResolver.prototype, "songs", null);
__decorate([
    (0, type_graphql_1.Query)(() => type_graphql_2.Song),
    __param(0, (0, type_graphql_1.Args)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [type_graphql_2.FindUniqueSongArgs]),
    __metadata("design:returntype", void 0)
], SongResolver.prototype, "song", null);
__decorate([
    (0, type_graphql_1.FieldResolver)(() => [type_graphql_2.Author]),
    __param(0, (0, type_graphql_1.Root)()),
    __param(1, (0, type_graphql_1.Ctx)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [type_graphql_2.Song, Object]),
    __metadata("design:returntype", void 0)
], SongResolver.prototype, "authors", null);
__decorate([
    (0, type_graphql_1.Mutation)(() => type_graphql_2.Song),
    __param(0, (0, type_graphql_1.Arg)('data')),
    __param(1, (0, type_graphql_1.Arg)('authorIds')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [type_graphql_2.SongCreateWithoutAuthorsInput,
        array_ids_input_1.ArrayIds]),
    __metadata("design:returntype", void 0)
], SongResolver.prototype, "createSong", null);
__decorate([
    (0, type_graphql_1.Mutation)(() => type_graphql_2.Song),
    __param(0, (0, type_graphql_1.Arg)('data')),
    __param(1, (0, type_graphql_1.Arg)('where')),
    __param(2, (0, type_graphql_1.Arg)('authorIds')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [type_graphql_2.SongUpdateWithoutAuthorsInput,
        type_graphql_2.SongWhereUniqueInput,
        array_ids_input_1.ArrayIds]),
    __metadata("design:returntype", void 0)
], SongResolver.prototype, "updateSong", null);
exports.SongResolver = SongResolver = __decorate([
    (0, typedi_1.Service)(),
    (0, type_graphql_1.Resolver)(type_graphql_2.Song),
    __metadata("design:paramtypes", [song_service_1.SongService])
], SongResolver);
//# sourceMappingURL=song.resolver.js.map