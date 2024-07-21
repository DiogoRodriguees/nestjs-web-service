import { NestFactory } from '@nestjs/core';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';
import { GlobalInterceptor } from './common/interceptors/globla.interceptor';
import { AppModule } from './modules/app.module';

async function bootstrap(): Promise<void> {
  const app = await NestFactory.create(AppModule);
  app.useGlobalInterceptors(new GlobalInterceptor());

  const config = new DocumentBuilder()
    .setTitle('App Traainning Documentation')
    .setDescription('Service created to learn framwork NestJS')
    .setVersion('1.0')
    .addTag('Basic Documentation')
    .build();
  const document = SwaggerModule.createDocument(app, config);
  SwaggerModule.setup('api', app, document);

  app.enableCors();
  await app.listen(3000);
}
bootstrap();
