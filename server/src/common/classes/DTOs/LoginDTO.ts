import { JoiSchema } from 'nestjs-joi';
import { JoiGroup } from 'src/common/enums/JoiEnums';
import { LoginSchema } from 'src/common/schemas/login.schema';

export class Login {
  @JoiSchema(LoginSchema.EmailSchema)
  @JoiSchema([JoiGroup.LOGIN], LoginSchema.EmailSchema.required())
  email: string;

  @JoiSchema(LoginSchema.PasswordSchema)
  @JoiSchema([JoiGroup.LOGIN], LoginSchema.PasswordSchema.required())
  password: string;
}
