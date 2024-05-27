import { Body, Controller, HttpStatus, Post } from '@nestjs/common';
import { Authenticate } from 'src/classes/authenticate';
import { Login } from 'src/classes/login';
import { ResponseDTO } from 'src/classes/response-dto';
import { AuthService } from 'src/services/auth.service';

@Controller('/auth')
export class AuthControlelr {
  constructor(private readonly authService: AuthService) {}

  @Post()
  async signIn(@Body() data: Login): Promise<ResponseDTO<Authenticate>> {
    const authentication = await this.authService.signIn(data.email, data.password);
    return new ResponseDTO(HttpStatus.OK, 'Success on sign in', authentication);
  }
}
