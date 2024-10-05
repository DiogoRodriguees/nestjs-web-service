import * as Joi from 'joi';

export class LoginSchema {
  static EmailSchema = Joi.string()?.email().max(254);
  static PasswordSchema = Joi.string().max(32);
}
