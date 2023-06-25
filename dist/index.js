"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
require("reflect-metadata");
const dotenv = require("dotenv");
const type_graphql_1 = require("type-graphql");
const server_1 = require("@apollo/server");
const standalone_1 = require("@apollo/server/standalone");
const path_1 = require("path");
const client_1 = require("@prisma/client");
const typedi_1 = require("typedi");
const modules_1 = require("./modules");
const errors_1 = require("./utils/errors");
const getApolloContext_1 = require("./utils/getApolloContext");
dotenv.config();
async function bootstrap() {
    const prismaClient = new client_1.PrismaClient();
    await prismaClient.$connect();
    const schema = await (0, type_graphql_1.buildSchema)({
        resolvers: modules_1.resolvers,
        emitSchemaFile: (0, path_1.resolve)(__dirname, './graphql/generated-schema.graphql'),
        container: ({ context }) => context.container,
        validate: { forbidUnknownValues: false },
    });
    const server = new server_1.ApolloServer({
        schema,
        formatError: errors_1.apolloFormatError,
        plugins: [
            {
                requestDidStart: async () => ({
                    async willSendResponse({ contextValue }) {
                        typedi_1.Container.reset(contextValue.requestId.toString());
                    },
                }),
            },
        ],
    });
    const PORT = process.env.PORT || 3001;
    const { url } = await (0, standalone_1.startStandaloneServer)(server, {
        context: (0, getApolloContext_1.getApolloContext)(prismaClient),
        listen: { port: Number(PORT) },
    });
    console.log(`🚀 Application is running on: ${url}`);
    console.log(`💻 GraphQL Playground: ${url}graphql`);
}
bootstrap().catch(console.error);
//# sourceMappingURL=index.js.map