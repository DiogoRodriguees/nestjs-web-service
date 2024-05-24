import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { AppController } from '../controllers/app.controller';
import { DatabaseModule } from './database.module';
import { UserModule } from './user.module';

@Module({
  imports: [ConfigModule.forRoot(), UserModule, DatabaseModule],
  controllers: [AppController],
})
export class AppModule {}
