import { NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { User } from 'src/common/classes/user';
import { UserEntity } from 'src/entities/user.entity';
import { IUserRepository } from 'src/interfaces/repositories/IUserRepository';
import { FindManyOptions, Repository } from 'typeorm';

export class UserRepository implements IUserRepository {
  constructor(@InjectRepository(UserEntity) private readonly repository: Repository<UserEntity>) {}

  public async getToDelete(id: number): Promise<UserEntity> {
    return await this.repository.findOne({ where: { id } });
  }

  public async createNewUser(user: UserEntity) {
    return this.repository.save(user);
  }

  public async getAll(): Promise<UserEntity[]> {
    const query: FindManyOptions<UserEntity> = {
      order: {
        createdAt: 'DESC',
      },
    };

    return await this.repository.find(query);
  }

  public async setNewValues(user: User): Promise<UserEntity> {
    const UserEntity = await this.repository.findOne({ where: { id: user.id } });
    UserEntity.setNewValues(user);
    return UserEntity;
  }

  public async getToAuthenticate(email: string): Promise<UserEntity> {
    const user = await this.repository.findOne({ where: { email } });
    if (!user) throw new NotFoundException('Email not found');
    return user;
  }

  public async softRemove(user: UserEntity) {
    return this.repository.softRemove(user);
  }
}
