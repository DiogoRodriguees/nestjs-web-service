import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { JwtModule } from '@nestjs/jwt';
import { Configs } from 'src/common/configs/configs';
import { AppController } from '../controllers/app.controller';
import { AuthModule } from './auth.module';
import { DatabaseModule } from './database.module';
import { UserModule } from './user.module';

@Module({
  imports: [ConfigModule.forRoot(), UserModule, DatabaseModule, JwtModule.register(Configs.jwt), AuthModule],
  controllers: [AppController],
})
export class AppModule {}
