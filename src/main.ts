import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import formattedDate from './helper/formattedDate'

async function bootstrap() {
  const LISTENING_PORT = process.env.LISTENING_PORT
    ? process.env.LISTENING_PORT
    : 3000;
  const app = await NestFactory.create(AppModule);
  await app.listen(LISTENING_PORT, () => {
    const utcDate = new Date();
    console.log(formattedDate(utcDate));
    console.log('App listening on port : ' + LISTENING_PORT);
  });
}
bootstrap();
