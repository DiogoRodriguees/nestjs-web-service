import { LoginDTO } from '@classes/DTOs/LoginDTO';
import { Body, Controller, HttpStatus, Post, UsePipes } from '@nestjs/common';
import { JoiPipe } from 'nestjs-joi';
import { Authenticate } from 'src/common/classes/authenticate';
import { ResponseDTO } from 'src/common/classes/response-dto';
import { JoiGroup } from 'src/common/enums/JoiEnums';
import { AuthService } from 'src/services/auth.service';

@Controller('/auth')
export class AuthControlelr {
  constructor(private readonly authService: AuthService) {}

  @Post()
  @UsePipes(new JoiPipe({ group: JoiGroup.LOGIN }))
  async signIn(@Body() data: LoginDTO): Promise<ResponseDTO<Authenticate>> {
    console.log('Sign user');
    const authentication = await this.authService.signIn(data.email, data.password);
    return new ResponseDTO(HttpStatus.OK, 'Success on sign in', authentication);
  }
}
