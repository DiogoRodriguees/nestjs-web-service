import { User } from '@classes/user';
import { UserEntity } from '@entities/user.entity';

export interface IUserRepository {
  createNewUser: (user: UserEntity) => Promise<UserEntity>;
  getAll: () => Promise<Array<UserEntity>>;
  setNewValues: (user: User) => Promise<UserEntity>;
  getToDelete: (userID: number) => Promise<UserEntity>;
  softRemove: (user: UserEntity) => Promise<UserEntity>;
}
