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
exports.AuthorService = void 0;
const typedi_1 = require("typedi");
const getPrismaPagination_1 = require("../../helpers/getPrismaPagination");
const graphql_1 = require("graphql");
const httpStatusCode_1 = require("../../types/enums/httpStatusCode");
const slugfy_1 = require("../../utils/slugfy");
let AuthorService = exports.AuthorService = class AuthorService {
    constructor(ctx) {
        this.ctx = ctx;
    }
    async checkIfNameOrSlugAuthorAlreadyExists({ name, slug, }) {
        if (await this.ctx.prisma.author.findFirst({ where: { OR: [{ name }, { slug }] } })) {
            throw new graphql_1.GraphQLError('Já existe uma banda/cantor(a) com esse nome', {
                extensions: { code: httpStatusCode_1.HttpStatusCode.CONFLICT, status: 409 },
            });
        }
    }
    findMany({ paginationInput, orderBy, where, }) {
        return (0, getPrismaPagination_1.prismaPagination)({
            model: this.ctx.prisma.author,
            where,
            orderBy,
            paginationInput,
        });
    }
    async count(authorWhereInput) {
        return this.ctx.prisma.author.count({ where: authorWhereInput });
    }
    async findOne(findUniqueAuthorArgs) {
        const foundAuthor = await this.ctx.prisma.author.findUnique(findUniqueAuthorArgs);
        if (!foundAuthor) {
            throw new graphql_1.GraphQLError('Autor não encontrado', {
                extensions: { code: httpStatusCode_1.HttpStatusCode.NOT_FOUND, status: 404 },
            });
        }
        return foundAuthor;
    }
    async create({ name }) {
        const slug = (0, slugfy_1.slugfy)(name);
        await this.checkIfNameOrSlugAuthorAlreadyExists({ name, slug });
        return this.ctx.prisma.author.create({ data: { name, slug } });
    }
    async update({ name }, where) {
        const slug = (0, slugfy_1.slugfy)(name);
        await this.checkIfNameOrSlugAuthorAlreadyExists({ name, slug });
        return this.ctx.prisma.author.update({
            data: { name, slug },
            where,
        });
    }
};
exports.AuthorService = AuthorService = __decorate([
    (0, typedi_1.Service)(),
    __param(0, (0, typedi_1.Inject)('context')),
    __metadata("design:paramtypes", [Object])
], AuthorService);
//# sourceMappingURL=author.service.js.map