import { User } from '@prisma/client'

export type JwdDto = Pick<User, 'id' | 'email' | 'role'>
