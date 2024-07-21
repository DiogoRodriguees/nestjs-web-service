import * as Joi from 'joi';

export const EmailSchema = Joi.string()?.email().max(254);
export const PasswordSchema = Joi.string().max(32);
