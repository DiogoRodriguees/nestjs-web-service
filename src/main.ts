import { NestFactory } from '@nestjs/core';
import { GlobalInterceptor } from './interceptors/globla.interceptor';
import { AppModule } from './modules/app.module';

async function bootstrap(): Promise<void> {
  const app = await NestFactory.create(AppModule);
  app.useGlobalInterceptors(new GlobalInterceptor());
  await app.listen(3000);
}
bootstrap();
