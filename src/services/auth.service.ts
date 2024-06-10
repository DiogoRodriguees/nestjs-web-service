import { Injectable, UnauthorizedException } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import * as bcrypt from 'bcrypt';
import { Authenticate } from 'src/common/classes/authenticate';
import { UserRepository } from 'src/repositories/user.repository';

@Injectable()
export class AuthService {
  constructor(
    private readonly userRepo: UserRepository,
    private readonly jwtService: JwtService,
  ) {}

  async signIn(email: string, password: string): Promise<Authenticate> {
    const user = await this.userRepo.getToAuthenticate(email);
    const isMatch = await bcrypt.compare(password, user.password);
    if (!isMatch) throw new UnauthorizedException();

    const payload = await this.jwtService.signAsync({ id: user.id });
    return { accessToken: payload };
  }
}
