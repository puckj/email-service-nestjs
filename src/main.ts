import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';

async function bootstrap() {
  const LISTENING_PORT = process.env.LISTENING_PORT
    ? process.env.LISTENING_PORT
    : 3000;
  const app = await NestFactory.create(AppModule);
  await app.listen(LISTENING_PORT, () => {
    console.log('app listening on port : ' + LISTENING_PORT);
  });
}
bootstrap();
