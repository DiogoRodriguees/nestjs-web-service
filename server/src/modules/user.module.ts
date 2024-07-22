import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { UserEntity } from 'src/entities/user.entity';
import { UserRepository } from 'src/repositories/user.repository';
import { UserController } from '../controllers/user.controller';
import { UserService } from '../services/user.service';

@Module({
  imports: [TypeOrmModule.forFeature([UserEntity])],
  controllers: [UserController],
  providers: [UserService, UserRepository],
})
export class UserModule {}