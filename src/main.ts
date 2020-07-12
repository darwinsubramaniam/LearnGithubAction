import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  console.log("darwin");
  console.log("minor");
  await app.listen(3000);
}
bootstrap();
