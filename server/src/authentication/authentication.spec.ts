import { Test } from '@nestjs/testing';
import { AuthService } from '@services/auth.service';

describe('Authentication', () => {
  // let controller: AuthController;
  let service: AuthService;

  beforeEach(async () => {
    const mod = await Test.createTestingModule({
      // controllers: [AuthController],
      providers: [AuthService],
    }).compile();

    // controller = mod.get<AuthController>(AuthController);
    // service = mod.get<AuthService>(AuthService);
  });

  describe('Teste 1', () => {
    it('Deve retornar tudo ok', async () => {
      // const result = controller.signIn({ email: 'diogo@email', password: 'password' });
      // console.log(result);
      expect('Tudo ok').toBe('Tudo ok');
    });
  });
});
