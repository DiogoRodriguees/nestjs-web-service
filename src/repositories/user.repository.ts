import { InjectRepository } from '@nestjs/typeorm';
import { User } from 'src/classes/user';
import { UserEntity } from 'src/entities/user.entity';
import { FindManyOptions, Repository } from 'typeorm';

export class UserRepository extends Repository<UserEntity> {
  constructor(@InjectRepository(UserEntity) private readonly repository: Repository<UserEntity>) {
    super(repository.target, repository.manager, repository.queryRunner);
  }

  public async getToDelete(id: number) {
    return await this.findOne({ where: { id } });
  }

  public async getAll() {
    const query: FindManyOptions<UserEntity> = {
      order: {
        createdAt: 'DESC',
      },
    };

    return await this.find(query);
  }

  public async setNewValues(user: User) {
    const UserEntity = await this.findOne({ where: { id: user.id } });
    UserEntity.setNewValues(user);
    return UserEntity;
  }
}
