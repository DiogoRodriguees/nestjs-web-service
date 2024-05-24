import { Injectable } from '@nestjs/common';
import { User } from 'src/classes/user';
import { UserEntity } from 'src/entities/user-entity';
import { UserRepository } from 'src/repositories/user.repository';

@Injectable()
export class UserService {
  constructor(private readonly userRepo: UserRepository) {}

  public async create(user: User) {
    const newUser = UserEntity.create(user);
    return this.userRepo.save(newUser);
  }

  public async list() {
    return await this.userRepo.getAll();
  }

  public async update(user: User) {
    const userUpdated = await this.userRepo.setNewValues(user);
    return await this.userRepo.save(userUpdated);
  }

  public async delete(userID: number) {
    const user = await this.userRepo.getToDelete(userID);
    return await this.userRepo.softRemove(user);
  }
}
