import { PrismaClient } from '../prisma/generated/type-prisma';
export declare const getApolloContext: (prismaClient: PrismaClient) => ({ req }: {
    req: any;
}) => Promise<ApolloContext>;
