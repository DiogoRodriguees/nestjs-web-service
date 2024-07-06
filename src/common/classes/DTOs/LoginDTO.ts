import { JoiSchema } from 'nestjs-joi';
import { JoiGroup } from 'src/common/enums/JoiEnums';
import { EmailSchema, PasswordSchema } from 'src/common/schemas/login.schema';

export class LoginDTO {
  @JoiSchema(EmailSchema)
  @JoiSchema([JoiGroup.LOGIN], EmailSchema.required())
  email: string;

  @JoiSchema(PasswordSchema)
  @JoiSchema([JoiGroup.LOGIN], PasswordSchema.required())
  password: string;
}
