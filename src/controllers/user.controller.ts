import { Body, Controller, Delete, Get, HttpStatus, Param, Patch, Post } from '@nestjs/common';
import { ResponseDTO } from 'src/classes/response-dto';
import { User } from 'src/classes/user';
import { UserEntity } from 'src/entities/user.entity';
import { UserService } from '../services/user.service';

@Controller('user')
export class UserController {
  constructor(private readonly userService: UserService) {}

  @Post()
  async create(@Body() data: User): Promise<ResponseDTO<User>> {
    const userCreated = await this.userService.create(data);
    return new ResponseDTO(HttpStatus.CREATED, 'Success on create user', userCreated);
  }

  @Get()
  async list(): Promise<ResponseDTO<UserEntity[]>> {
    const users = await this.userService.list();
    return new ResponseDTO(HttpStatus.OK, 'Success on list user', users);
  }

  @Patch()
  async update(@Body() data: User): Promise<ResponseDTO<UserEntity>> {
    const userUpdated = await this.userService.update(data);
    return new ResponseDTO(HttpStatus.OK, 'Success on update user', userUpdated);
  }

  @Delete(':id')
  async delete(@Param('id') userID: number): Promise<ResponseDTO<UserEntity>> {
    const userDeleted = await this.userService.delete(userID);
    return new ResponseDTO(HttpStatus.OK, 'Success on delete user', userDeleted);
  }
}
