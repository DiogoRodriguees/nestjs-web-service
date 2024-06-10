import { Injectable } from '@nestjs/common';
import * as bcrypt from 'bcrypt';
import { User } from 'src/common/classes/user';
import { UserEntity } from 'src/entities/user.entity';
import { UserRepository } from 'src/repositories/user.repository';
@Injectable()
export class UserService {
  constructor(private readonly userRepo: UserRepository) {}

  public async create(user: User): Promise<User> {
    const salt = await bcrypt.genSalt(Number(process.env.SALT));
    const hashPassword = await bcrypt.hash(user.password, salt);
    const newUser = UserEntity.create({ ...user, password: hashPassword });

    const { id, name, email } = await this.userRepo.save(newUser);
    return { id, name, email };
  }

  public async list(): Promise<UserEntity[]> {
    return await this.userRepo.getAll();
  }

  public async update(user: User): Promise<UserEntity> {
    const userEntity = await this.userRepo.setNewValues(user);
    return await this.userRepo.save(userEntity);
  }

  public async delete(userID: number): Promise<UserEntity> {
    const user = await this.userRepo.getToDelete(userID);
    return await this.userRepo.softRemove(user);
  }
}
