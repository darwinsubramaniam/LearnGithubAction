import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  console.log("darwin");
  console.log("minor");
  console.log("minor release");
  await app.listen(3000);
}
bootstrap();
