import { ConfigModule } from '@nestjs/config';
import { JwtModuleOptions } from '@nestjs/jwt';
import { TypeOrmModuleOptions } from '@nestjs/typeorm';
import { UserEntity } from 'src/entities/user.entity';

ConfigModule.forRoot();

const database: TypeOrmModuleOptions = {
  type: 'postgres',
  host: process.env.DATABASE_HOST,
  port: Number(process.env.DATABASE_PORT),
  username: process.env.DATABASE_USERNAME,
  password: process.env.DATABASE_PASSWORD,
  database: process.env.DATABASE_NAME,
  entities: [UserEntity],
};

const jwt: JwtModuleOptions = {
  global: true,
  secret: process.env.JWT_SECRET,
  signOptions: { expiresIn: '1d' },
};

export const Configs = { database: database, jwt: jwt };
