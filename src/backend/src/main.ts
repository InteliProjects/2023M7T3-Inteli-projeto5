import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { SwaggerModule, DocumentBuilder } from '@nestjs/swagger';
import { ValidationPipe } from '@nestjs/common';

import { LoggingInterceptor } from 'interceptors/logger.interceptor';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.useGlobalPipes(new ValidationPipe());
  app.useGlobalInterceptors(
    new LoggingInterceptor(),
  )
  app.enableCors();

  const config = new DocumentBuilder()
    .setTitle('Kepler API Documentation')
    .setDescription(
      'Este documento possui como objetivo documentar todos os endpoints presentes na aplicação e está dividido em dois módulos: NLU e speech-to-text.',
    )
    .setVersion('1.0')
    .addTag('Kepler')
    .build();
  const document = SwaggerModule.createDocument(app, config);
  SwaggerModule.setup('swagger', app, document);

  await app.listen(3000);
}
bootstrap();
