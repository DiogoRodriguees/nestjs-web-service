import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Configs } from 'src/common/configs/configs';

@Module({
  imports: [TypeOrmModule.forRoot(Configs.database)],
})
export class DatabaseModule {}
