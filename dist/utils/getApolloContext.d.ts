import { PrismaClient } from '@prisma/client';
export declare const getApolloContext: (prismaClient: PrismaClient) => ({ req }: {
    req: any;
}) => Promise<ApolloContext>;
