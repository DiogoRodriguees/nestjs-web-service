import { Inject, Injectable } from '@nestjs/common';
import * as bcrypt from 'bcrypt';
import { User } from 'src/common/classes/user';
import { UserEntity } from 'src/entities/user.entity';
import { IUserRepository } from 'src/interfaces/repositories/IUserRepository';

@Injectable()
export class UserService {
  constructor(@Inject('IUserRepository') private readonly userRepo: IUserRepository) {}

  public async create(user: User): Promise<User> {
    const salt = await bcrypt.genSalt(Number(process.env.SALT));
    const hashPassword = await bcrypt.hash(user.password, salt);
    const newUser = UserEntity.create({ ...user, password: hashPassword });

    const { id, name, email } = await this.userRepo.createNewUser(newUser);
    return { id, name, email };
  }

  public async list(): Promise<UserEntity[]> {
    return await this.userRepo.getAll();
  }

  public async update(user: User): Promise<UserEntity> {
    const userEntity = await this.userRepo.setNewValues(user);
    return await this.userRepo.createNewUser(userEntity);
  }

  public async delete(userID: number): Promise<UserEntity> {
    const user = await this.userRepo.getToDelete(userID);
    return await this.userRepo.softRemove(user);
  }
}
