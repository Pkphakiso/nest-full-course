import { ValidationPipe } from '@nestjs/common';
import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  //added useGlobaPiles for valitations and the whitelist to strip what is not need
  app.useGlobalPipes(new ValidationPipe({
    whitelist:true,
  }));
  await app.listen(3333);
}
bootstrap();
