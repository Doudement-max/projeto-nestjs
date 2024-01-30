import { NestFactory } from '@nestjs/core';
import { ProductsModules } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create(ProductsModules);
  await app.listen(3000);
}
bootstrap();
