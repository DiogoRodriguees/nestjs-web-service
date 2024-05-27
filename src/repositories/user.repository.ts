import { NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { User } from 'src/classes/user';
import { UserEntity } from 'src/entities/user.entity';
import { FindManyOptions, Repository } from 'typeorm';

export class UserRepository extends Repository<UserEntity> {
  constructor(@InjectRepository(UserEntity) private readonly repository: Repository<UserEntity>) {
    super(repository.target, repository.manager, repository.queryRunner);
  }

  public async getToDelete(id: number): Promise<UserEntity> {
    return await this.findOne({ where: { id } });
  }

  public async getAll(): Promise<UserEntity[]> {
    const query: FindManyOptions<UserEntity> = {
      order: {
        createdAt: 'DESC',
      },
    };

    return await this.find(query);
  }

  public async setNewValues(user: User): Promise<UserEntity> {
    const UserEntity = await this.findOne({ where: { id: user.id } });
    UserEntity.setNewValues(user);
    return UserEntity;
  }

  public async getToAuthenticate(email: string): Promise<UserEntity> {
    const user = await this.findOne({ where: { email } });
    if (!user) throw new NotFoundException('Email not found');
    return user;
  }
}
