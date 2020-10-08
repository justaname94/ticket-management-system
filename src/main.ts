import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import Config from './config';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  app.enableCors();

  const port = Config.server.port;

  await app.listen(port);
}
bootstrap();
