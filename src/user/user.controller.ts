import { Body, Controller, Delete, Get, HttpStatus, Param, Patch, Post } from '@nestjs/common';
import { ResponseDTO } from 'src/classes/response-dto';
import { User } from 'src/classes/user';
import { UserService } from './user.service';

@Controller('user')
export class UserController {
  constructor(private readonly userService: UserService) {}

  @Post()
  async create(@Body() data: User) {
    const userCreated = await this.userService.create(data);
    return new ResponseDTO(HttpStatus.CREATED, 'Success on create user', userCreated);
  }

  @Get()
  async list() {
    const users = await this.userService.list();
    return new ResponseDTO(HttpStatus.OK, 'Success on list user', users);
  }

  @Patch()
  async update(@Body() data: User) {
    const userUpdated = await this.userService.update(data);
    return new ResponseDTO(HttpStatus.OK, 'Success on update user', userUpdated);
  }

  @Delete(':id')
  async delete(@Param('id') userID: number) {
    const userDeleted = await this.userService.delete(userID);
    return new ResponseDTO(HttpStatus.OK, 'Success on delete user', userDeleted);
  }
}
