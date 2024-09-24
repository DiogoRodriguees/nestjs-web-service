import { UserRepository } from '@repositories/user.repository';

export const UserRepositoryProvider = { provide: 'IUserRepository', useClass: UserRepository };
