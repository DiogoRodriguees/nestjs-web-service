import { LoginDTO } from '@classes/DTOs/LoginDTO';
import { Body, Controller, HttpStatus, Post, UsePipes } from '@nestjs/common';
import { Authenticate } from 'src/common/classes/authenticate';
import { ResponseDTO } from 'src/common/classes/response-dto';
import { JoiGroup as JoiGroupEnum } from 'src/common/enums/JoiEnums';
import { JoiPipeCustom } from 'src/common/pipes/JoiPipe';
import { AuthService } from 'src/services/auth.service';

@Controller('/auth')
export class AuthControlelr {
  constructor(private readonly authService: AuthService) {}

  @Post()
  @UsePipes(JoiPipeCustom.useGroup(JoiGroupEnum.LOGIN))
  async signIn(@Body() data: LoginDTO): Promise<ResponseDTO<Authenticate>> {
    const authentication = await this.authService.signIn(data.email, data.password);
    return new ResponseDTO(HttpStatus.OK, 'Success on sign in', authentication);
  }
}
